

require('./bootstrap');

window.Vue = require('vue').default;



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('home', require('./components/Home.vue').default);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
// import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDotCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


const app = new Vue({
    el: '#app',
});
