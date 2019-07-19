<template>
  <v-container fill-height>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md8>
        <v-card
          tag="form"
          @submit.prevent="send(form)"
          ref="form"
          enctype="multipart/form-data"
          autocomplete="off"
        >
          <!-- begin: toolbar -->
          <v-toolbar color="transparent" flat tile>
            <v-toolbar-title>Adicionar Produto</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn type="button" @click="reset" :disabled="loading" text>Cancelar</v-btn>
              <v-btn
                type="submit"
                :disabled="loading"
                :loading="loading"
                color="success"
                text
              >Salvar</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <!-- end: toolbar -->
          <v-divider></v-divider>
          <!-- begin: form -->
          <v-card-text>
            <!-- begin: input -->
            <v-text-field label="Nome do produto" v-model.trim="form.name" />
            <!-- end: input -->

            <!-- begin: input -->
            <v-text-field label="Preço" v-model.trim="form.price" />
            <!-- end: input -->

            <!-- begin: input-file -->
            <v-file-input
              v-model="form.images"
              color="primary accent-2"
              label="Imagens"
              multiple
              placeholder="Selecione as imagens"
              prepend-icon="mdi-paperclip"
              accept="image/*"
              :display-size="1000"
              counter
            >
              <template v-slot:selection="{ index, text }">
                <v-chip v-if="index < 2" color="primary accent-4" dark label small>{{ text }}</v-chip>

                <span
                  v-else-if="index === 2"
                  class="overline grey--text text--darken-3 mx-2"
                >+{{ files.length - 2 }} Imagens(s)</span>
              </template>
            </v-file-input>
            <!-- end: input-file -->

            <!-- begin: input -->
            <v-switch label="Produto Kit?" color="primary" v-model="form.kit" />
            <!-- end: input -->

            <v-expand-transition>
              <!--begin: childrens -->
              <v-autocomplete
                label="Produtos filhos"
                :items="products"
                item-text="name"
                return-object
                v-model="form.children"
                v-if="form.kit"
                multiple
                :loading="loading"
              ></v-autocomplete>
              <!--end: childrens -->
            </v-expand-transition>

            <!-- begin: editor-product-child -->
            <v-list v-if="form.children.length > 0" two-line color="grey lighten-4">
              <v-list-item v-for="(child,index) in form.children" :key="index">
                <v-list-item-content>
                  <v-list-item-title>
                    <span>{{ child.name }}</span>
                    <span class="px-1">-</span>
                    <span>R$ {{ child.price }} (unidade)</span>
                  </v-list-item-title>
                  <v-list-item-subtitle v-text="child.description"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-input>
                    <input v-model="child.quantity" readonly class="native text-xs-center" />
                    <template v-slot:prepend>
                      <v-icon @click="(child.quantity > 1 ? child.quantity-- : null)">mdi-minus</v-icon>
                    </template>
                    <template v-slot:append>
                      <v-icon @click="child.quantity++">mdi-plus</v-icon>
                    </template>
                  </v-input>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <!-- end: editor-product-child -->

            <!-- begin: categorias -->
            <v-card flat color="transparent">
              <v-sheet class="pa-2 primary accent-2">
                <v-text-field
                  v-model="search"
                  label="Filtrar categorias"
                  dark
                  flat
                  solo-inverted
                  hide-details
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </v-sheet>

              <v-card-text>
                <v-treeview
                  activatable
                  transition
                  color="orange darken-2"
                  :active.sync="categoriesActive"
                  :search="search"
                  :items="categories"
                  :load-children="categoriaFilhos"
                ></v-treeview>
              </v-card-text>
            </v-card>
            <!-- end: categorias -->

            <!-- begin: input -->
            <v-textarea label="Descrição do produto" v-model.trim="form.description" counter />
            <!-- end: input -->
          </v-card-text>
          <!-- end: form -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { store, query as productQuery } from "../services/products";
import {
  categorias as mlb_categorias,
  subcategorias as mlb_subcategorias
} from "../services/mercado_livre";
import { setTimeout } from "timers";
import { format } from "path";
export default {
  name: "Create",

  data: () => ({
    loading: false,
    search: null,
    products: [],
    categories: [],
    categoriesActive: [],
    form: {
      name: "",
      price: 0,
      description: "",
      images: [],
      children: [],
      kit: false,
      category_id: null
    }
  }),

  watch: {
    async "form.kit"(value) {
      if (value) {
        //
        await this.readyProducts();
      }
    }
  },

  computed: {
    categoryId() {
      if (this.categoriesActive.length <= 0) return null;
      //
      return this.categoriesActive[0];
    }
  },

  methods: {
    /**
     * Cadastrar produto
     *
     * @param form
     */
    async send(form) {
      this.loading = true;
      //
      form.kit = form.kit ? 1 : 0;

      let {
          name,
          price,
          description,
          category_id,
          kit,
          images,
          children
        } = form,
        formData = new FormData();

      if (!this.categoryId) {
        alert("Selecione a categoria.");
      } else {
        //
        category_id = this.categoryId;
      }

      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category_id", category_id);
      formData.append("kit", kit);

      // preparar imagens
      images.forEach(image => formData.append("images[]", image));

      // preparar filhos
      children.forEach(child => {
        //
        const { id, quantity } = child;
        //
        formData.append(`children[${id}]`, JSON.stringify({ quantity }));
      });

      //
      await store(formData)
        .then(() => {
          //
          alert("Produto cadastrado.");
          // limpar campos
          this.reset();
        })
        .finally(() => (this.loading = false));
    },

    /**
     * Redefinir estado inicial do formulario.
     *
     * @returns void
     */
    reset() {
      this.form = {
        name: "",
        price: 0,
        description: "",
        images: [],
        children: [],
        kit: false,
        category_id: ""
      };
    },

    /**
     * Carregar produtos para compor o kit.
     */
    async readyProducts() {
      this.loading = true;

      await productQuery("orderBy[price]=asc")
        .then(({ data }) => {
          this.products = data.map(h => {
            // anexar novo campo
            h.quantity = 1;
            //
            return h;
          });
        })
        .finally(() => (this.loading = false));
    },

    /**
     * Carregar categorias.
     *
     *
     */
    async categorias() {
      await mlb_categorias().then(response => {
        //
        const { data } = response;
        //
        this.categories = data.map(category => {
          //
          category.children = [];
          //
          return category;
        });
      });
    },

    /**
     * @param category
     */
    async categoriaFilhos(category) {
      //
      let item = _.find(this.categories, cat => cat.id === category.id);
      //
      if (!item) return [];
      //
      await mlb_subcategorias(category.id).then(({ data }) => {
        //
        item.children = data.children_categories.map(category => {
          //
          // category.children = [];
          //
          return category;
        });
      });
    }
  },

  async mounted() {
    // carregar categorias mercado livre brasil.
    await this.categorias();
  }
};
</script>

<style lang="scss" scoped>
input.native {
  width: 35px;
  height: 50px;
  &:focus,
  &:active {
    outline: 0;
    box-shadow: none;
    border-color: none;
  }
}
</style>
