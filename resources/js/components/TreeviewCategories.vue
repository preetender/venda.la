<template>
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
        :active.sync="active"
        :search="search"
        :items="categories"
        :load-children="loadChildrenCategory"
        @update:active="$emit('category', $event[0])"
      ></v-treeview>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  categorias as mlb_categorias,
  subcategorias as mlb_subcategorias
} from "../services/mercado_livre";
export default {
  data: () => ({
    active: [],
    categories: [],
    search: null,
    loading: false
  }),

  methods: {
    /**
     * Carregar categorias.
     */
    async loadCategories() {
      this.loading = true;
      //
      await mlb_categorias()
        .then(response => {
          //
          const { data } = response;
          //
          this.categories = data.map(category => {
            //
            category.children = [];
            //
            return category;
          });
        })
        .finally(() => (this.loading = false));
    },

    /**
     * Obter filhos de categoria.
     *
     * @param category
     */
    async loadChildrenCategory(category) {
      //
      let item = _.find(this.categories, cat => cat.id === category.id);
      //
      if (!item) return [];
      //
      await mlb_subcategorias(category.id).then(({ data }) => {
        //
        item.children = data.children_categories.map(category => {
          //
          return category;
        });
      });
    }
  },

  async mounted() {
    //
    await this.loadCategories();
  }
};
</script>

<style lang="scss" scoped>
</style>
