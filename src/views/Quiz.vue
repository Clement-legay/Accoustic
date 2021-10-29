<template>
  <div id="Quiz">
    <HeaderComponentShort :theme="'SONO'"></HeaderComponentShort>
    <main class="hoc container clear">
      <div class="content">
        <div class="group demo">
          <div class="one_third first">
            <h6>C'EST L'HEURE DE JOUER</h6>
            <p>
              Appuyez sur le bouton play pour écouter l'accord. En suite, choisissez quel note correspond au son, selon vous.<br/>
              N'aillez pas peur plus vous pratiquer et plus vous accoutumer votre oreil musicale !
            </p>
          </div>
          <div class="two_third">
            <h6 class="right">Score: {{ score }}</h6>
            <accords class="center" :notes="theOne"></accords>
            <br>
            <br>
            <div id="holding" class="container">
              <button class="btn one_quarter font-x2 btn_center" v-for="(answer, index) in answers" :key="answer.id" v-on:click="checkIf(index)">
                {{ answer.name }}
              </button>
            </div>
            <p v-if="Finally">Damn you right</p>
          </div>
        </div>
      </div>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponentShort from "../components/HeaderComponentShort";
import FooterComponent from "../components/FooterComponent";
import Accords from "../assets/js/Accords";
import accords from "/src/components/Accord"

export default {
  name: 'Quiz',
  components: {
    HeaderComponentShort,
    FooterComponent,
    accords
  },
  data() {
    return {
      test: Accords.data().lezAccords,
      theOne: Audio,
      answers: Array,
      Finally: false,
      score: 0
    }
  },
  methods: {
    next() {
      this.theOne = this.rand(this.test)
      this.answers = [this.rand(this.test), this.theOne, this.rand(this.test)]
      this.answers = this.shuffle(this.answers)
      this.Finally = false
    },
    rand(accord) {
      return accord[Math.floor(Math.random() * accord.length)]
    },
    checkIf(index) {
      if (this.Finally !== true) {
        if (this.answers[index].name === this.theOne.name) {
          this.Finally = true
          this.score++
          this.next()
        }
        else {
          this.Finally = false
          this.score--
        }
      }
    },
    shuffle(a) {
      let j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
  },
  mounted() {
    this.theOne = this.rand(this.test)
    this.answers = [this.rand(this.test), this.theOne, this.rand(this.test)]
    this.answers = this.shuffle(this.answers)
  }
}
</script>

<style scoped>
#holding
{
  padding-left: 15%;
}
</style>