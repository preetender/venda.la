<template>
  <v-container fill-height>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md8>
        <v-card>
          <!-- begin: toolbar -->
          <v-toolbar color="transparent" flat tile>
            <v-toolbar-title>Adicionar Produto</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn text>Salvar</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <!-- end: toolbar -->

          <!-- begin: form -->
          <v-card-text>
            @form
          </v-card-text>
          <!-- end: form -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Create"
};
</script>

<style lang="scss" scoped>
</style>
