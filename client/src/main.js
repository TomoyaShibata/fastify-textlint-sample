import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'

import TextEditor from './TextEditor.vue'
import Warning from './Warning.vue'

const store = new Vuex.Store({
  state: {
    content: '',
    lintMessages: []
  },
  mutations: {
    updateContent (state, value) {
      this.state.content = value

      const params = new URLSearchParams()
      params.append('content', this.state.content)

      axios.post('http://localhost:3000/lint', params)
        .then((response) => {
          this.state.lintMessages = response.data[0].messages
        })
    }
  }
})

new Vue({
  el: '#app',
  store,
  components: {
    TextEditor,
    Warning
  },
  template:  (
    '<div><text-editor /><warning /></div>'
  )
})
