import Vue from 'vue'
import Vuex from 'vuex'
import helloWorld from '@/page/HelloWorld/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    helloWorld
  }
})

export default store
