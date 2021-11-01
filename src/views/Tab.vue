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
            <v-select
                v-model="choice"
                item-text="name"
                :items="music"
                menu-props="auto"
                label="Select Tab"
                return-object
            ></v-select>
            <v-btn class="ma-2" v-on:click="interpreter()" outlined :loading="playing" :disabled="!choice" color="dark lighten-2">Play</v-btn>
            <v-btn class="ma-2" v-on:click="stopAll()" outlined :disabled="!choice" color="dark lighten-2">Stop</v-btn>
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
      choice: null,

      corde1: Array,
      corde2: Array,
      corde3: Array,
      corde4: Array,
      music: Array,
      playing: false,
      audio: []
    }
  },
  methods: {
    interpreter() {
      this.audio = []
      this.playing = true
      for (let i =0; i < this.choice.notes.length; i++) {
        setTimeout(() => {
          let obj = this.choice.notes[i]
          let decrypt = this.makeASound(obj[0], obj[1])
          this.audio.push(new Audio(decrypt))
          if (this.playing === true) {this.audio[i].play()}},
           (i * this.choice.rythm))
      }
    },
    makeASound(note, corde) {
      if (corde === 1) {
        return this.corde1[note].link
      } else if (corde === 2) {
        return this.corde2[note].link
      } else if (corde === 3) {
        return this.corde3[note].link
      } else {
        return this.corde4[note].link
      }
    },
    stopAll() {
      this.playing = false
      let id = window.setTimeout(() => {}, 0)
      while (id--) {
        window.clearTimeout(id);
      }
    },
  },
  mounted() {
    this.corde1 = frettes.data().cor1
    this.corde2 = frettes.data().cor2
    this.corde3 = frettes.data().cor3
    this.corde4 = frettes.data().cor4
    this.music = tabulation.data().tabs
  }
}
</script>

<style scoped>
</style>