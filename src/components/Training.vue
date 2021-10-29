<template>
  <div id="finger'sTraining">
    <main class="hoc container clear">
      <div class="content">
        <div class="group demo">
          <div class="one_third first center">
            <h6>C'EST L'HEURE DE JOUER</h6>
            <p style="text-align: justify">
              Appuyez sur le bouton play pour écouter l'accord. En suite, choisissez quel note correspond au son, selon vous.
              N'aillez pas peur plus vous pratiquer et plus vous accoutumer votre oreil musicale !
            </p>
          </div>
          <div class="two_third">
            <h6 class="right">Score: {{ score }}</h6>
            <Accord class="center" :notes="theOne"></Accord>
            <br>
            <div id="handle" class="center">
              <ul class="cor" v-for="(corde, indexCor) in 4" :key="indexCor">
                <li class="note" :class="indexCor">
                  <button v-show="answer[indexCor] === 0" v-on:click="play(indexCor, 0)" style="background-image: url('./Img/signe.png'); width: 14%; height: 25%;"></button>
                  <button v-show="answer[indexCor] !== 0" v-on:click="play(indexCor, 0)" style="width: 14%; height: 25%;"></button>
                </li>
                <li class="note" :class="indexCor">
                  <button v-show="answer[indexCor] === 1" v-on:click="play(indexCor, 1)" style="background-image: url('./Img/signe.png'); width: 17%; height: 25%;"></button>
                  <button v-show="answer[indexCor] !== 1" v-on:click="play(indexCor, 1)" style="width: 17%; height: 25%;"></button>
                </li>
                <li class="note" :class="indexCor">
                  <button v-show="answer[indexCor] === 2" v-on:click="play(indexCor, 2)" style="background-image: url('./Img/signe.png'); width: 15%; height: 25%;"></button>
                  <button v-show="answer[indexCor] !== 2" v-on:click="play(indexCor, 2)" style="width: 15%; height: 25%;"></button>
                </li>
                <li class="note" :class="indexCor">
                  <button v-show="answer[indexCor] === 3" v-on:click="play(indexCor, 3)" style="background-image: url('./Img/signe.png'); width: 15%; height: 25%;"></button>
                  <button v-show="answer[indexCor] !== 3" v-on:click="play(indexCor, 3)" style="width: 15%; height: 25%;"></button>
                </li>
                <li class="note" :class="indexCor">
                  <button v-show="answer[indexCor] === 4" v-on:click="play(indexCor, 4)" style="background-image: url('./Img/signe.png'); width: 13.5%; height: 25%;"></button>
                  <button v-show="answer[indexCor] !== 4" v-on:click="play(indexCor, 4)" style="width: 13.5%; height: 25%;"></button>
                </li>
                <li class="note" :class="indexCor">
                  <button v-show="answer[indexCor] === 5" v-on:click="play(indexCor, 5)" style="background-image: url('./Img/signe.png'); width: 13%; height: 25%;"></button>
                  <button v-show="answer[indexCor] !== 5" v-on:click="play(indexCor, 5)" style="width: 13%; height: 25%;"></button>
                </li>
                <li class="note" :class="indexCor">
                  <button v-show="answer[indexCor] === 6" v-on:click="play(indexCor, 6)" style="background-image: url('./Img/signe.png'); width: 11.5%; height: 25%;"></button>
                  <button v-show="answer[indexCor] !== 6" v-on:click="play(indexCor, 6)" style="width: 11.5%; height: 25%;"></button>
                </li>
                <br>
              </ul>
            </div>
            <br>
            <div class="right">
              <button v-on:click="checkIf()" class="btn">NEXT</button>
            </div>
          </div>
        </div>
      </div>
    </main>
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
      test: Array,
      sound: Object,
      theOne: Audio,
      score: 0,
      answer: [0, 0, 0, 0],
      corde1: Array,
      corde2: Array,
      corde3: Array,
      corde4: Array,
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
      this.theOne = this.rand(this.test)
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
    // actualiser() {
    //   let cor1 = document.getElementsByClassName('cor1')
    //   let cor2 = document.getElementsByClassName('cor2')
    //   let cor3 = document.getElementsByClassName('cor3')
    //   let cor4 = document.getElementsByClassName('cor4')
    //   for (let indexcor1 = 0; indexcor1< cor1.length ; indexcor1++) {
    //       if (indexcor1 === this.answer[0]) {
    //         cor1[indexcor1].style.backgroundImage = "../../public/Img/signe.png"
    //       }
    //   }
    //   for (let indexcor2 = 0; indexcor2< cor2.length ; indexcor2++) {
    //     if (indexcor2 === this.answer[1]) {
    //       cor2[indexcor2].style.backgroundImage = "../../public/Img/signe.png"
    //     }
    //   }
    //   for (let indexcor3 = 0; indexcor3< cor3.length ; indexcor3++) {
    //     if (indexcor3 === this.answer[2]) {
    //       cor3[indexcor3].style.backgroundImage = "../../public/Img/signe.png"
    //     }
    //   }
    //   for (let indexcor4 = 0; indexcor4< cor4.length ; indexcor4++) {
    //     if (indexcor4 === this.answer[3]) {
    //       cor4[indexcor4].style.backgroundImage = "url(../../public/Img/signe.png"
    //     }
    //   }
    // },
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
    this.test = Accords.data().lezAccords
    this.theOne = this.rand(this.test)
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