<template>
  <div id="app">
  <com-header></com-header>
    <div>
<!--      <md-button class="md-raised md-primary">-->
<!--&lt;!&ndash;        <md-datepicker v-model="selectedDate">&ndash;&gt;-->
<!--&lt;!&ndash;        </md-datepicker>&ndash;&gt;-->
<!--      </md-button>-->
        <com-featured></com-featured>
        <com-menu></com-menu>
        <com-call-us></com-call-us>
        <com-letter></com-letter>
    </div>
  <com-footer></com-footer>
  </div>
</template>

<script>
import comHeader from './components/Header-footer/Header.vue';
import comFooter from './components/Header-footer/Footer.vue';
import comFeatured from './components/Featured/index.vue'
import comMenu from './components/Menu/index.vue'
import comCallUs from './components/CallUs/index.vue';
import  comLetter from './components/NewsLetter/index'

export default {
  name: 'App',
  data(){
    return{
      selectedDate: null
    }
  },
  components: {
        comHeader,
        comFooter,
        comFeatured,
        comMenu,
        comCallUs,
        comLetter
  }
}
</script>

<style>
  @import "./assets/style.css";
</style>
