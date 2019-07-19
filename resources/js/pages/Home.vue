<template>
  <v-container grid-list-xs fluid>
    <v-layout row wrap v-if="products.length > 0">
      <v-flex v-for="(product, index) in products" :key="index" xs4 d-flex class="pa-3">
        <product :item="product" />
      </v-flex>
    </v-layout>

    <v-layout column v-else fill-height align-center>
      <v-flex>
        <v-card flat>
          Não existem produtos cadastrados em nosso sistema.
          <v-btn @click="$emit('page', 'cadastro')" text class="mr-1">Clique aqui</v-btn>e cadastre.
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { findAll } from "../services/products";
import { setTimeout } from "timers";
export default {
  name: "Home",

  components: {
    product: () => import("../components/Product")
  },

  data: () => ({
    page: 1,
    perPage: 6,
    loading: false,
    products: []
  }),

  methods: {
    /**
     * Carregar
     */
    async ready() {
      this.loading = true;

      await findAll(this.page, this.perPage)
        .then(({ data }) => (this.products = data))
        .finally(() => (this.loading = false));
    }
  },

  async mounted() {
    //
    await this.ready();
  }
};
</script>
