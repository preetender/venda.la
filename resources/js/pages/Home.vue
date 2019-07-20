<template>
  <v-container grid-list-xs fluid fill-height>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate color="primary" size="96"></v-progress-circular>
    </v-overlay>

    <v-layout row wrap v-if="products.length > 0">
      <v-flex xs12 class="pa-3">
        <v-toolbar flat color="grey" dark>
          <v-toolbar-title>Exibindo {{ meta.from }} de {{ meta.to }} produtos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-select
            :items="[5, 10, 15, 50]"
            v-model="perPage"
            single-line
            placeholder="Total por pagina"
            hide-details
            style="max-width: 150px;"
          ></v-select>
        </v-toolbar>
      </v-flex>
      <v-flex v-for="(product, index) in products" :key="index" xs4 d-flex class="pa-3">
        <product :item="product" @remove="forgetProductById" />
      </v-flex>

      <v-flex xs12 class="text-xs-center">
        <v-pagination :length="links" v-model="page" circle x-large color="orange"></v-pagination>
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
import { findAll, destroy } from "../services/products";
import { setTimeout } from "timers";
export default {
  name: "Home",

  components: {
    product: () => import("../components/Product")
  },

  data: () => ({
    page: 1,
    perPage: 5,
    loading: false,
    products: [],
    meta: {}
  }),

  computed: {
    links() {
      //
      if (_.isEmpty(this.meta)) return 0;
      //
      return _.ceil(this.meta.total / this.perPage);
    }
  },

  watch: {
    async page() {
      //
      await this.ready();
    },
    async perPage() {
      //
      await this.ready();
    }
  },

  methods: {
    /**
     * Carregar produtos.
     *
     * @returns
     */
    async ready() {
      this.loading = true;

      await findAll(this.page, this.perPage)
        .then(({ data: { data, meta } }) => {
          this.products = data;
          this.meta = meta;
        })
        .finally(() => (this.loading = false));
    },

    /**
     * Remover produto
     *
     * @param product_id
     */
    async forgetProductById(product_id) {
      //
      let index = _.findIndex(
        this.products,
        product => product.id === product_id
      );

      await destroy(product_id).then(({ data }) => {
        //
        alert(data);
        //
        this.products.splice(index, 1);
      });
    }
  },

  async mounted() {
    //
    await this.ready();
  }
};
</script>

<style lang="scss">
.v-pagination__item {
  &:focus {
    outline: 0;
    border-color: none;
    box-shadow: none;
  }
}
</style>
