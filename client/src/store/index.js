import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    // tags: []
  },
  mutations: {
    SET_VIDEOS(state, videos){
      state.videos = videos;
    },
    // SET_TAGS(state, tags){
    //   state.tags = tags;
    // }
  },
  actions: {
    loadVideos({commit}){
      let url = `http://localhost:3000/api/videos`
      axios.get(url).then(res => {
        console.log(res.data)
        commit('SET_VIDEOS', res.data)
      })
    },
    
  },
  modules: {
  }
})
