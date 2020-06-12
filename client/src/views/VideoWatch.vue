<template>
    <div>
        <!-- 48:39 ON VIDEO TUTORIAL -->
        <center><video-player  class="video-player-box" ref="videoPlayer" :options="playerOptions"></video-player></center>
        <span v-for="(tag,i) in video.tags" :key="i">
            <center><button class="tag-button">{{ tag }}</button></center>

        </span>
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
            return this.$store.state.videos.find(vid => vid.vid_id == this.$route.params.id)
        },
        playerOptions(){
            return {
                // videojs options
                language: "en",
                playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3.0],
                sources: [{
                    type: "video/mp4",
                    // src: '/video.mp4'
                    src: this.video.videoURL
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