<template>
  <div id="finger'sTraining">
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
          <v-container cols="12">
            <v-select
                v-model="choice"
                item-text="name"
                :items="accords"
                menu-props="auto"
                label="Select Gamme"
                return-object
                @change="next(); score = 0"
            ></v-select>
            <v-card elevation="2" outlined color="grey lighten-3">
              <v-row>
                <v-spacer></v-spacer>
                <v-col sm="4">
                  <Accord class="pa-2 center" :notes="theOne"></Accord>
                </v-col>
                <v-col sm="4">
                  <h6 class="text-right pa-md-2">Score: {{ score }}</h6>
                </v-col>
              </v-row>
              <br>
              <div id="handle" class="center">

<!--                c'est ici-->

                <v-slide-group v-for="(corde, index) in 4" :key="index" mandatory style="height: 25%">
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card color="transparent" style="width: 14%" @click="toggle" v-on:click="play(index, 0)">
                      <v-scale-transition>
                        <v-icon v-if="active" class="fas fa-circle pa-2" color="grey darken-2"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card color="transparent" style="width: 17%" @click="toggle" v-on:click="play(index, 1)">
                      <v-scale-transition>
                        <v-icon v-if="active" class="fas fa-circle pa-2" color="grey darken-2"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card color="transparent" style="width: 15%" @click="toggle" v-on:click="play(index, 2)">
                      <v-scale-transition>
                        <v-icon v-if="active" class="fas fa-circle pa-2" color="grey darken-2"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card color="transparent" style="width: 15%" @click="toggle" v-on:click="play(index, 3)">
                      <v-scale-transition>
                        <v-icon v-if="active" class="fas fa-circle pa-2" color="grey darken-2"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card color="transparent" style="width: 13.5%" @click="toggle" v-on:click="play(index, 4)">
                      <v-scale-transition>
                        <v-icon v-if="active" class="fas fa-circle pa-2" color="grey darken-2"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card color="transparent" style="width: 13%" @click="toggle" v-on:click="play(index, 5)">
                      <v-scale-transition>
                        <v-icon v-if="active" class="fas fa-circle pa-2" color="grey darken-2"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                  <v-slide-item v-slot="{ active, toggle }">
                    <v-card color="transparent" style="width: 12.5%" @click="toggle" v-on:click="play(index, 6)">
                      <v-scale-transition>
                        <v-icon v-if="active" class="fas fa-circle pa-2" color="grey darken-2"></v-icon>
                      </v-scale-transition>
                    </v-card>
                  </v-slide-item>
                </v-slide-group>

                <!--              c'est fini-->
              </div>
              <br>
              <div class="right">
                <v-btn class="ma-2" v-on:click="checkIf()" outlined color="dark lighten-2">Next</v-btn>
              </div>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import frettes from "../assets/js/frettes";
import Accords from "../assets/js/Accords";
import Accord from "./Accord";

export default {
  name: "Training",
  components: {
    Accord
  },
  data() {
    return {
      accords: Accords.data().Accords,
      choice: Accords.data().Accords[0],
      sound: Object,
      theOne: Audio,
      score: 0,
      answer: [0, 0, 0, 0],
      corde1: Array,
      corde2: Array,
      corde3: Array,
      corde4: Array,
      model: null
    }
  },
  methods: {
    play(Cor, Not) {
      if (Cor === 0) {
        this.sound = this.corde1[Not].sound
        this.answer = [Not, this.answer[1], this.answer[2], this.answer[3]]
        this.sound.play()
      }
      else if (Cor === 1) {
        this.sound = this.corde2[Not].sound
        this.answer = [this.answer[0], Not, this.answer[2], this.answer[3]]
        this.sound.play()
      }
      else if (Cor === 2) {
        this.sound = this.corde3[Not].sound
        this.answer = [this.answer[0], this.answer[1], Not, this.answer[3]]
        this.sound.play()
      }
      else {
        this.sound = this.corde4[Not].sound
        this.answer = [this.answer[0], this.answer[1], this.answer[2], Not]
        this.sound.play()
      }
    },
    next() {
      this.theOne = this.rand(this.choice.data)
    },
    rand(accord) {
      return accord[Math.floor(Math.random() * accord.length)]
    },
    checkIf() {
      let check = false
      if (this.answer[0] === this.theOne.data[0]) {
        if (this.answer[1] === this.theOne.data[1]) {
          if (this.answer[2] === this.theOne.data[2]) {
            if (this.answer[3] === this.theOne.data[3]) {
              check = true
              this.score++
              this.next()
              this.answer = [0,0,0,0]
            }
          }
        }
      }
      if (check !== true) {
        this.score--
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
    this.theOne = this.rand(this.choice.data)
    this.corde1 = frettes.data().cor1
    this.corde2 = frettes.data().cor2
    this.corde3 = frettes.data().cor3
    this.corde4 = frettes.data().cor4
  }
}
</script>

<style scoped>
#handle
{
  height: 100px;
  width: 300px;
  background-image:url('../../public/Img/manche.png');
  background-position: center;
  background-size: cover;
  margin: 0 auto;
}
.nothing {
  background-color: transparent;
}
.cor
{
  display: inline;
}
.note
{
  display: inline;
}
.note > button
{
  float: left;
  background-color: transparent;
  border: none;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
@media (min-width: 1920px) and (max-width: 2560px){
  #handle
  {
    height: 200px;
    width: 600px;
  }
}
@media (min-width: 750px) and (max-width: 1920px){
  #handle
  {
    height: 150px;
    width: 450px;
  }
}
</style>