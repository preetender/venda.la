<template>
  <v-container fill-height>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md8>
        <v-card tag="form" @submit.prevent="send(form)" ref="form" enctype="multipart/form-data">
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
            <v-textarea label="Descrição do produto" v-model.trim="form.description" counter />
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
              <v-autocomplete label="Produtos filhos" :items="[]" v-if="form.kit" />
              <!--end: childrens -->
            </v-expand-transition>
          </v-card-text>
          <!-- end: form -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { store } from "../services/products";
import { setTimeout } from "timers";
export default {
  name: "Create",

  data: () => ({
    loading: false,
    form: {
      name: "",
      description: "",
      images: [],
      children: [],
      kit: false,
      category_id: ""
    }
  }),

  methods: {
    /**
     * Cadastrar produto
     *
     * @param form
     */
    async send(form) {
      this.loading = true;
      //
      console.log(form);
      //
      setTimeout(() => (this.loading = false), 1500);
    },

    /**
     * Redefinir estado inicial do formulario.
     *
     */
    reset() {
      this.form = {
        name: "",
        description: "",
        images: [],
        children: [],
        kit: false,
        category_id: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
