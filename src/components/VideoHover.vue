<script>
import {ref} from 'vue';

export default {
    props: {
        videoSrc: {
            type: String,
            required: true
        }
    },
    setup(){
        const video = ref(null);

        const playVideo = () => {
            if(video.value){
                video.value.play();
            }
        };
        
        const resetVideo = () => {
            if(video.value){
                video.value.pause();
                video.value.currentTime = 0;
            }
        };

        return {video, playVideo, resetVideo};
    }
}

</script>

<template>
    <!-- Video Hover -->
    <div @mouseenter="playVideo" @mouseleave="resetVideo" class="relative md:w-[50vh] w-full h-32">
        <video 
            ref="video"
            muted
            loop
            class="absolute object-cover w-full h-full"
        >
            <!-- TODO: handle differe,ts video types-->
            <source :src="videoSrc" type="video/webm"/>
        </video>
    </div>

</template>