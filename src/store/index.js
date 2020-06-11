import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [
      {
        id: 1,
        name: 'Walking Dead S1E1',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/81db8V6MbUL._AC_SL1500_.jpg',
        videoURL: 'https://www.youtube.com/watch?v=MB3inHJO2FM&t=9s'
      },
      {
        id: 2,
        name: 'Walking Dead S1E2',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        thumbnail: 'https://www.coverwhiz.com/uploads/tv/The-Walking-Dead-Season-2.jpg',
        videoURL: 'https://www.youtube.com/watch?v=ZxmWhlidAZ8&t=18s'

      },
      {
        id: 3,
        name: 'Walking Dead S1E3',
        description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        thumbnail: 'https://i2.wp.com/thelensnola.org/wp-content/uploads/2016/10/poster-crop.jpg?fit=425%2C422&ssl=1',
        videoURL: 'https://www.youtube.com/watch?v=anxA_b70R0M&t=18s'

      },
      {
        id: 4,
        name: 'Walking Dead S1E4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        thumbnail: 'https://i.pinimg.com/originals/97/17/34/97173435ad7c0d2116ee7cbf1690e495.jpg',
        videoURL: 'https://www.youtube.com/watch?v=_RkowNQQFjo&t=16s'

      },
      {
        id: 5,
        name: 'Walking Dead S1E5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        thumbnail: 'https://wallpapercave.com/wp/wp3732708.jpg',
        videoURL: 'https://www.youtube.com/watch?v=001KB6NLRUs'

      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
