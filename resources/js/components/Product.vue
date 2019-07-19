<template>
  <v-hover v-slot:default="{ hover }">
    <v-card tile class="mx-auto" style="position: relative;" :elevation="hover ? 12 : 2">
      <v-img :src="image(256)" :lazy-src="image(10)" height="256" contain v-if="!item.kit">
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>

      <v-carousel v-else height="256" cycle>
        <v-carousel-item v-for="(child,index) in item.children" :key="index">
          <v-img
            :src="child.images[0].breakpoints[256]"
            :lazy-src="child.images[0].breakpoints[10]"
            height="256"
            contain
          />
        </v-carousel-item>
      </v-carousel>

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
            :key="'view-'+item.id"
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
            :key="'remove-'+item.id"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-slide-x-reverse-transition>
      </v-card-text>

      <v-card-title>{{ item.name }}</v-card-title>

      <v-card-text>
        <div class="my-3 subtitle-1 black--text">R$ {{ item.price }} • {{ item.category_id }}</div>
        <div>{{ item.description }}</div>
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
  },

  computed: {
    images() {
      return this.item.images;
    },

    image() {
      return (size = 10) => {
        //
        if (this.images.length <= 0) {
          //
          if (size === 10) return require("../assets/default-lazy.png");
          //
          return require("../assets/default.png");
        }
        const images = this.images[0].breakpoints;

        //
        return images.hasOwnProperty(size) ? images[size] : images["original"];
      };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
