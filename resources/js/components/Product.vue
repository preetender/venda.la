<template>
  <v-hover v-slot:default="{ hover }">
    <v-card tile class="mx-auto" style="position: relative;" :elevation="hover ? 12 : 2">
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        height="240"
      >
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>

      <v-card-text style="position: relative;" class="pb-0">
        <v-slide-x-reverse-transition group>
          <v-btn
            absolute
            color="orange"
            class="white--text"
            fab
            large
            right
            top
            v-if="hover"
            :key="'view-'+index"
            style="right: 85px;"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>

          <v-btn
            absolute
            color="error"
            class="white--text"
            fab
            large
            right
            top
            v-if="hover"
            :key="'remove-'+index"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-slide-x-reverse-transition>
      </v-card-text>

      <v-card-title>nome do produto</v-card-title>

      <v-card-text>
        <div class="my-3 subtitle-1 black--text">$ 00.00 • Categoria</div>
        <div>Conteudo</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Product",

  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
