<template>
  <div id="TAB">
    <HeaderComponentShort :theme="'SONO'"></HeaderComponentShort>
    <main class="hoc container clear">
      <div class="content">
        <div class="group">
          <div class="one_third first">
            <h6>C'EST L'HEURE DE JOUER</h6>
            <p>
              Appuyez sur le bouton play pour écouter l'accord. En suite, choisissez quel note correspond au son, selon vous.<br/>
              N'aillez pas peur plus vous pratiquer et plus vous accoutumer votre oreille musicale !
            </p>
          </div>
          <div class="two_third">
            <button class="btn" v-on:click="playing()" >play</button>
            <button class="btn" v-on:click="playing()" >stop</button>
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
import frettes from "../assets/js/frettes";
import tabulation from "../assets/js/tabulation";

export default {
  name: 'TAB',
  components: {
    HeaderComponentShort,
    FooterComponent,
  },
  data() {
    return {
      corde1: Array,
      corde2: Array,
      corde3: Array,
      corde4: Array,
      music: Array,
      intMusic: []
    }
  },
  methods: {
    interpreter() {
      for (let i =0; i < this.music.notes.length; i++) {
        let obj = this.music.notes[i]
        let decrypt = this.makeASound(obj[0], obj[1])
        this.intMusic.push(decrypt)
      }
    },
    makeASound(note, corde) {
      if (corde === 1) {
        return this.corde1[note].sound
      } else if (corde === 2) {
        return this.corde2[note].sound
      } else if (corde === 3) {
        return this.corde3[note].sound
      } else {
        return this.corde4[note].sound
      }
    },
    playing() {
      for (let i = 0; i < this.music.notes.length; i++) {
        let snd = this.intMusic[i]
        if (i > 0) {
          let preSnd = this.intMusic[i-1]
          if (snd[0] === preSnd[0]) {
            if (snd[1] === preSnd[1]) {
              // pass
            }
          }
        }
        setTimeout(function () {snd.play()}, (i * 500))
        setTimeout(function () {snd.pause()}, ((i * 500)+250))
      }
    }
  },
  mounted() {
    this.corde1 = frettes.data().cor1
    this.corde2 = frettes.data().cor2
    this.corde3 = frettes.data().cor3
    this.corde4 = frettes.data().cor4
    this.music = tabulation.data().tabs[0]
    this.interpreter()
  }
}
</script>

<style scoped>
</style>