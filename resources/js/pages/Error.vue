<template>
  <v-overlay :value="true" color="info darken-1" dark :opacity="1">
    <v-container fill-height>
      <v-layout justify-center align-center column>
        <v-icon size="96">mdi-alert-circle</v-icon>
        <span>Token de acesso inválido.</span>
      </v-layout>
    </v-container>
  </v-overlay>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
