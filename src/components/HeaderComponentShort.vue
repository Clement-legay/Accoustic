<template>
  <div class="bgded overlay" style="background-image:url('./Img/ukulele.jpg'); background-position: center ">
    <header id="header" class="hoc clear">
      <div id="logo" class="one_quarter first">
        <h1><router-link to="/">Acoustic</router-link></h1>
      </div>
    </header>

    <section id="navwrapper" class="hoc clear">
      <nav id="mainav">
        <ul class="clear">
          <li class="active"><router-link to="/">Home</router-link></li>
          <li><router-link to="/accords" class="drop">Accords</router-link>
            <ul>
              <li><router-link v-bind:to="{name: 'accords', params: {gamme: '0'}}">Simple</router-link></li>
              <li><router-link v-bind:to="{name: 'accords', params: {gamme: '1'}}">Mineures</router-link></li>
              <li><router-link v-bind:to="{name: 'accords', params: {gamme: '2'}}">Septièmes</router-link></li>
              <li><router-link v-bind:to="{name: 'accords', params: {gamme: '3'}}">Septièmes Majeures</router-link></li>
              <li><router-link v-bind:to="{name: 'accords', params: {gamme: '4'}}">Septièmes Mineures</router-link></li>
            </ul>
          </li>
          <li><router-link to="/quiz">Sono</router-link></li>
          <li><router-link to="/training">Finger's training</router-link></li>
          <li><router-link to="/">tips</router-link></li>
          <li><router-link to="/">Super training</router-link></li>
          <li><router-link to="/tabs">TABS</router-link></li>
        </ul>
      </nav>
    </section>
    <div id="breadcrumb" class="hoc clear">
      <h6 class="heading">{{ theme }}</h6>

    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponentShort",
  props: ["theme"]
}
</script>

<style scoped>

</style>