<template>
  <div id="Quiz">
    <HeaderComponentShort :theme="'Finger\'s Training'"></HeaderComponentShort>
    <Training/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponentShort from "../components/HeaderComponentShort";
import FooterComponent from "../components/FooterComponent";
import Training from "../components/Training2";

export default {
  name: "fingerPick",
  components: {
    HeaderComponentShort,
    FooterComponent,
    Training
  }
}

</script>

<style scoped>
</style>