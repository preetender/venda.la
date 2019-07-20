<template>
  <v-card flat color="transparent">
    <v-sheet class="pa-2 primary accent-2">
      <v-text-field
        v-model="search"
        label="Faça uma busca em categorias."
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
        :load-children="loadChildCategory"
        @update:active="$emit('category', $event[0])"
      ></v-treeview>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    active: [],
    search: null,
    loading: false
  }),

  computed: mapGetters({
    categories: "categories/all"
  }),

  methods: {
    ...mapActions({
      loadCategories: "categories/load-categories",
      loadChildCategory: "categories/load-child-category"
    })
  },

  async mounted() {
    //
    await this.loadCategories();
  }
};
</script>
