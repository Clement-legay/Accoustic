<template>
  <div class="bgded overlay row4" style="background-color: black">
    <footer id="footer" class="hoc clear">
      <!-- ################################################################################################ -->
      <div class="center btmspace-50">
        <h6 class="heading">Accoustic</h6>

        <p class="nospace">Une autre façon d'appréhender la musique.</p>
      </div>
      <!-- ################################################################################################ -->
      <hr class="btmspace-50">
      <!-- ################################################################################################ -->
      <div class="one_quarter first">
        <h6 class="heading">Nous contacter</h6>
        <form action="#" method="post">
          <fieldset>
            <legend>Newsletter:</legend>
            <input class="btmspace-15" type="text" value="" placeholder="Name">
            <input class="btmspace-15" type="text" value="" placeholder="Email">
            <button type="submit" value="submit">Submit</button>
          </fieldset>
        </form>
      </div>
      <div class="one_quarter">
        <h6 class="heading">Informations</h6>
        <ul class="nospace linklist">
          <li>
            <article>
              <p class="nospace btmspace-10"><router-link to="/">Id euismod est risus ac neque aliquam erat volutpat pellentesque adipiscing.</router-link></p>
              <time class="block font-xs" datetime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
            </article>
          </li>
          <li>
            <article>
              <p class="nospace btmspace-10"><router-link to="/">Nunc hendrerit adipiscing nulla donec vestibulum odio quisque gravida morbi.</router-link></p>
              <time class="block font-xs" datetime="2045-04-05">Thursday, 5<sup>th</sup> April 2045</time>
            </article>
          </li>
        </ul>
      </div>
      <div class="one_quarter">
        <h6 class="heading">Liens</h6>
        <ul class="nospace linklist">
          <li><router-link to="/">Hendrerit id lacus praesent</router-link></li>
          <li><router-link to="/">Ullamcorper risus gravida</router-link></li>
          <li><router-link to="/">Suscipit tempor turpis</router-link></li>
          <li><router-link to="/">Pede dictum ipsum vel auctor</router-link></li>
          <li><router-link to="/">Leo est tincidunt est sed</router-link></li>
        </ul>
      </div>
      <div class="one_quarter">
        <h6 class="heading">Tips</h6>
        <ul class="nospace clear latestimg">
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
          <li><router-link to="/" class="imgover"><img src="Img/01.png" alt=""></router-link></li>
        </ul>
      </div>
      <!-- ################################################################################################ -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>

</style>