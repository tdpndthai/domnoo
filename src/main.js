import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdDrawer, MdTabs,MdDatepicker,MdCard,MdToolbar,MdIcon,MdList } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueCarousel from 'vue-carousel'
import  VueResource from 'vue-resource'
// In main.js
import VueScrollReveal from 'vue-scroll-reveal';

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal,{
  duration:800,
  scale:1,
  distance: '50px'
});
// Vue.config.productionTip = false
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdTabs);
Vue.use(MdDatepicker);
Vue.use(MdCard);
Vue.use(MdToolbar);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(VueCarousel);
Vue.use(VueResource);

Vue.http.options.root="https://domnoo-5a610.firebaseio.com/"
new Vue({
  el:'#app',
  render: h => h(App),
})
