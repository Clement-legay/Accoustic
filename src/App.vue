<template>
  <v-app id="app">
    <router-view/>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script>
import FooterComponent from "./components/FooterComponent";

export default {
  name: 'App',
  components: {
    FooterComponent
  },
  data: () => ({
    //
  }),
};
</script>
