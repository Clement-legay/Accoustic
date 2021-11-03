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
            <v-col cols="12" sm="6" align="center">
              <v-btn class="ma-2" v-on:click="playTab(true )" outlined :loading="playing" :disabled="!choice" color="dark lighten-2">Play</v-btn>
              <v-btn class="ma-2" v-on:click="stopAll()" outlined :disabled="!playing" color="dark lighten-2">Stop</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="choice !== null" cols="12">
      <v-sheet class="mx-auto pa-6" elevation="8" outlined max-width="900">
        <v-row>
          <v-col sm="4">
            <v-spacer></v-spacer>
          </v-col>
          <v-col sm="4">
            <h1 class="center pa-2 text-button">Tablature</h1>
          </v-col>
          <v-col sm="4">
            <v-select class="pa-4" v-model="rythm" item-text="name" :items="rythmplus" dense label="Select Rythm" return-object></v-select>
          </v-col>
        </v-row>
        <v-slide-group v-model="firstNote" mandatory center-active show-arrows>
          <v-slide-item v-for="note in choice.notes" :key="note.id" v-slot="{ active, toggle }">
            <v-card outlined style="background-image: url('./Img/tab.jpg'); background-position: center; background-size: cover" height="150" width="75" @click="toggle">
                <v-btn elevation="2" fab tile small color="black" style="color: white; left: 25%; height: 25%; font-size: 15px" class="font-weight-bold font-x3" v-if="note[1] === 1" @click="playNote(note[0], note[1])">{{ note[0] }}</v-btn>
                <v-btn elevation="2" fab tile small color="black" style="color: white; left: 25%; height: 25%; font-size: 15px; top: 25%" class="font-weight-bold" v-if="note[1] === 2" @click="playNote(note[0], note[1])">{{ note[0] }}</v-btn>
                <v-btn elevation="2" fab tile small color="black" style="color: white; left: 25%; height: 25%; font-size: 15px; top: 50%" class="font-weight-bold" v-if="note[1] === 3" @click="playNote(note[0], note[1])">{{ note[0] }}</v-btn>
                <v-btn elevation="2" fab tile small color="black" style="color: white; left: 25%; height: 25%; font-size: 15px; top: 75%" class="font-weight-bold" v-if="note[1] === 4" @click="playNote(note[0], note[1])">{{ note[0] }}</v-btn>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
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
      rythm: {name: "500ms", data: 500},
      rythmplus: [{name: "250ms", data: 250},{name: "500ms", data: 500},{name: "750ms", data: 750},{name: "1000ms", data: 1000}],
      firstNote: 0,
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
          this.audio.push(new Audio(decrypt.link))
      }
    },
    makeASound(note, corde) {
      if (corde === 1) {
        return this.corde1[note]
      } else if (corde === 2) {
        return this.corde2[note]
      } else if (corde === 3) {
        return this.corde3[note]
      } else {
        return this.corde4[note]
      }
    },
    playTab(bool) {
      this.stopAll()
      this.playing = bool
      let max = this.audio.length
      setTimeout(() => {
        this.firstNote = 0; this.playing = false}, ((max + 1) * this.rythm.data))
      for (let i = 0; i < this.audio.length; i++) {
        setTimeout(() => {
          this.firstNote = i; if (this.playing === true) {this.audio[i].play()}}, (i * this.rythm.data))
      }
    },
    playNote(note, corde) {
      let result = this.makeASound(note, corde)
      result.sound.play()
    },
    stopAll() {
      this.playing = false
      this.reading = false
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