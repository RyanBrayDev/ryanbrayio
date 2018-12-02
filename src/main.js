import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLightbulb, faBuilding, faGraduationCap);
library.add(faFacebook, faLinkedin, faTwitter, faGithub);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
