<template>
  <div id="app">
    <v-app>
      <!-- begin: toolbar -->
      <v-app-bar color="primary" app dark>
        <v-toolbar-title>Venda.la</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            text
            v-for="(item,index) in links"
            :key="index"
            @click="page = item.component"
            :input-value="page === item.component"
          >
            <v-icon>{{ item.icon }}</v-icon>
            <span class="ml-1">{{ item.label }}</span>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <!-- end: toolbar -->

      <v-content>
        <v-slide-x-transition mode="out-in">
          <component :is="page" />
        </v-slide-x-transition>
      </v-content>

      <v-footer app height="auto" class="font-weight-medium" color="primary" dark>
        <v-flex xs12 text-xs-center>
          Todos os direitos reservados à
          <b>Venda.la</b>
        </v-flex>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Venda.la",

  components: {
    inicio: () => import("./components/Home"),
    cadastro: () => import("./components/Create")
  },

  data: () => ({
    page: "inicio",

    links: [
      {
        label: "Inicio",
        component: "inicio",
        icon: "mdi-home"
      },
      {
        label: "Adicionar",
        component: "cadastro",
        icon: "mdi-plus"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>
