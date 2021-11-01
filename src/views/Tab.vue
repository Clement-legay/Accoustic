<template>
  <div id="TAB">
    <HeaderComponentShort :theme="'SONO'"></HeaderComponentShort>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-sheet class="pa-6">
            <h6>C'EST L'HEURE DE JOUER</h6>
            <p class="font-x1 text-justify">
              Appuyez sur le bouton play pour écouter l'accord. En suite, choisissez quel note correspond au son, selon vous.<br/>
              N'aillez pas peur plus vous pratiquer et plus vous accoutumer votre oreil musicale !
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="6">
            <v-select
                v-model="choice"
                item-text="name"
                :items="music"
                menu-props="auto"
                label="Select Tab"
                return-object
                @change="stopAll(); interpreter()"
            ></v-select>
          <v-row>
            <v-col cols="12" sm="6" align="right">
              <v-btn v-on:click="playTab()" outlined :loading="playing" :disabled="!choice" color="dark lighten-2">Play</v-btn>
            </v-col>
            <v-col cols="12" sm="6" align="left">
              <v-btn v-on:click="stopAll()" outlined :disabled="!playing" color="dark lighten-2">Stop</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="choice !== null" cols="12">
      <v-card elevation="3" outlined shaped>
        <v-row class="pa-6">
          <div v-for="note in choice.notes" :key="note.id" class="center">
            <p v-if="note[1] === 1">
              --------<br>
              {{note[0]}}<br>
              |<br>
              |<br>
              |<br>
              --------
            </p>
            <p v-if="note[1] === 2">
              --------<br>
              |<br>
              {{note[0]}}<br>
              |<br>
              |<br>
              --------
            </p>
            <p v-if="note[1] === 3">
              --------<br>
              |<br>
              |<br>
              {{note[0]}}<br>
              |<br>
              --------
            </p>
            <p v-if="note[1] === 4">
              --------<br>
              |<br>
              |<br>
              |<br>
              {{note[0]}}<br>
              --------
            </p>
          </div>
        </v-row>
      </v-card>
    </v-container>
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
      for (let i =0; i < this.choice.notes.length; i++) {
          let obj = this.choice.notes[i]
          let decrypt = this.makeASound(obj[0], obj[1])
          this.audio.push(new Audio(decrypt))
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
    playTab() {
      this.playing = true
      let max = this.audio.length
      setTimeout(() => {
        this.playing = false}, ((max + 1) * this.choice.rythm))
      for (let i = 0; i < this.audio.length; i++) {
        setTimeout(() => {
          if (this.playing === true) {this.audio[i].play()}}, (i * this.choice.rythm))
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