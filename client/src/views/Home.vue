<template>
  <div class="home">
    <h1>Videos</h1>
    <div class="video-container" >
      <div v-for="(video, i) in videos" :key="i">
        <router-link :to="{ name: 'video-watch', params: { id: video.vid_id }}">
          <div  class="video-box">
            <img :src="video.thumbnail" :alt="video.name">
            <div>
              <h3>{{ video.name }}</h3>
              <div v-html="video.description"></div>
              <span v-for="(tag,i) in video.tags" :key="i"> 
                <button class="tag-button">{{tag}}</button>
              </span>
            </div>

          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      message: 'Hello Marjo I LOVE YOU',
    }
  },
  methods:{

  },
  created(){
    this.$store.dispatch('loadVideos'); 
  },
  computed:{
    videos(){
      return this.$store.state.videos
    },
  }
}
</script>

<style scoped lang="scss">
  .video-container{
    .video-box{
      border: 2px solid black;
      border-radius: 10px;
      margin: 10px;
      padding: 10px;
      text-align: left;
      display: flex;
      justify-content: flex-start;

      img{
        width: 150px;
        padding: 10px;
      }
    }
  }
  
</style>