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
                :disabled="loading || $v.form.$invalid"
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
            <v-text-field
              label="Produto (*)"
              placeholder="Nome do produto"
              v-model.trim="form.name"
              @input="$v.form.name.$touch"
              :error-messages="nameErrors"
            />
            <!-- end: input -->

            <!-- begin: input -->
            <v-text-field
              label="Preço (*)"
              placeholder="Valor do produto"
              v-model.trim="form.price"
              @input="$v.form.price.$touch"
              :error-messages="priceErrors"
            />
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
            <treeview-categories @category="setCategoryProduct" />
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
import { setTimeout } from "timers";
import { required } from "vuelidate/lib/validators";
export default {
  name: "Create",

  components: {
    "treeview-categories": () => import("../components/TreeviewCategories")
  },

  data: () => ({
    loading: false,
    products: [],
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
    nameErrors() {
      let errors = [],
        ref = this.$v.form["name"];

      if (!ref.$dirty) return [];

      !ref.required && errors.push("Informe o nome do produto.");

      return errors;
    },
    priceErrors() {
      let errors = [],
        ref = this.$v.form["price"];

      if (!ref.$dirty) return [];

      !ref.required && errors.push("Informe o valor do produto.");

      return errors;
    },
    categoryIdErrors() {
      let errors = [],
        ref = this.$v.form["category_id"];

      if (!ref.$dirty) return [];

      !ref.required && errors.push("Informe a categoria do produto.");

      return errors;
    }
  },

  validations: {
    form: {
      name: {
        required
      },
      price: {
        required
      },
      category_id: {
        required
      }
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
      //
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
        price: "",
        description: "",
        images: [],
        children: [],
        kit: false,
        category_id: ""
      };
      //
      this.$v.form.$reset();
    },

    /**
     * Selecionar categoria do produto.
     *
     * @param id
     */
    setCategoryProduct(id) {
      //
      this.form.category_id = id;
      //
      this.$v.form.category_id.$touch();
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
    }
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
