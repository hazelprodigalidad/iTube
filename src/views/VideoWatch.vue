<template>
    <div>
        <!-- 48:39 ON VIDEO TUTORIAL -->
        <video-player  class="video-player-box" ref="videoPlayer" :options="playerOptions">
                 </video-player>
                 
                 <!-- <img :src="video.thumbnail" :alt="video.name"> -->
        <h1>{{ video.name }}</h1>
        <div v-html="video.description"></div>
    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
    components: {
        videoPlayer
    },
    computed:{
        video(){
            return this.$store.state.videos.find(vid => vid.id == this.$route.params.id)
        },
        playerOptions(){
            return {
                // videojs options
                language: "en",
                playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3.0],
                sources: [{
                    type: "video/mp4",
                    src: '../cruelPeter.mp4'
                }],
                poster: this.video.thumbnail,
            }
        }
    },
    data(){
        return{
            

        }
    }
}
</script>

<style scoped lang="scss">
    img{
        max-width: 60%;
    }
</style>