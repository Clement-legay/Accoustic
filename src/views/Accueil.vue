<template>
  <div class="Accueil">
    <HeaderComponent/>
    <Article/>
    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/HeaderComponent";
import Article from "../components/Article";
import FooterComponent from "../components/FooterComponent";


export default {
  name: 'Quiz',
  components: {
    HeaderComponent,
    Article,
    FooterComponent
  },
}
</script>
