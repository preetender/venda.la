<template>
  <v-hover v-slot:default="{ hover }">
    <v-card tile class="mx-auto py-2" style="position: relative;" :elevation="hover ? 12 : 2">
      <v-img :src="image(256)" :lazy-src="image(10)" height="256" contain v-if="!item.kit">
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>

      <v-carousel v-else height="256" cycle hide-delimiter-background>
        <v-carousel-item v-for="(child,index) in item.children" :key="index">
          <v-img
            v-if="child.images[0]"
            :src="child.images[0].breakpoints[256]"
            :lazy-src="child.images[0].breakpoints[10]"
            height="256"
            contain
          />
          <!--  -->
          <v-img :lazy-src="lazyDefault" :src="defaultImage" v-else />
        </v-carousel-item>
      </v-carousel>

      <v-card-text style="position: relative;" class="pb-0">
        <v-slide-x-reverse-transition group>
          <v-btn
            absolute
            color="error"
            class="white--text"
            fab
            large
            right
            top
            :key="'remove-'+item.id"
            @click="$emit('remove', item.id)"
            v-if="hover"
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

  data: () => ({
    lazyDefault: require("../assets/default-lazy.png"),
    defaultImage: require("../assets/default.png")
  }),

  computed: {
    images() {
      return this.item.images;
    },

    image() {
      return (size = 10) => {
        //
        if (this.images.length <= 0) {
          //
          if (size === 10) return this.lazyDefault;
          //
          return this.defaultImage;
        }
        const images = this.images[0].breakpoints;
        //
        return images.hasOwnProperty(size) ? images[size] : images["original"];
      };
    },

    childrenImages() {
      let images = [];

      if (this.item.images.length > 0) {
        // primeira camada de imagens do produto.
        images.push(this.images);
      }

      this.item.children.forEach(child => {
        // capturar imagem de produtos filhos.
        images = Array.prototype.concat(
          images,
          this.childImageRecursive(child)
        );
      });

      return images;
    }
  },

  methods: {
    /**
     * Varrer produtos filhos e obter todas as imagens.
     *
     * @returns array
     */
    childImageRecursive(child) {
      let images = [];
      //
      if (child.images.length > 0) {
        images.push(child.images);
      }
      //
      if (child.kit) {
        child.children.forEach(item => {
          if (item.images.length > 0) {
            //
            images.push(item.images);
          }

          if (item.kit) {
            //
            images = Array.prototype.concat(
              images,
              this.childImageRecursive(item)
            );
          }
        });
      }
      //
      return images;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
