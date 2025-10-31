<script>
import {ref, onMounted} from 'vue';

 export default {
    props: {
        videoSrc: {
            type: String,
            required: true
        }
    },
    setup(props){
        const video = ref(null);
        const isMobile = ref(false);
        const isPlaying = ref(false);

        // Détection mobile
        const checkMobile = () => {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        };

        const initMobileVideo = async () => {
            if(!video.value) return;
            
            // Configuration mobile
            video.value.playsinline = true;
            video.value.muted = true;
            video.value.loop = true;
            video.value.preload = 'auto';
            video.value.controls = false;
            video.value.disablePictureInPicture = true;

            // Lancer automatiquement sur mobile
            video.value.addEventListener('loadeddata', async () => {
                try {
                    await video.value.play();
                    isPlaying.value = true;
                    console.log('Mobile video playing automatically');
                } catch (error) {
                    // Réessayer silencieusement
                    setTimeout(() => {
                        video.value?.play().catch(() => {});
                    }, 1000);
                }
            });

            // Maintenir la lecture
            video.value.addEventListener('ended', () => {
                video.value.currentTime = 0;
                video.value.play().catch(() => {});
            });

            video.value.load();
        };

        const initDesktopVideo = () => {
            if(!video.value) return;
            
            // Configuration desktop
            video.value.playsinline = true;
            video.value.muted = true;
            video.value.loop = true;
            video.value.preload = 'metadata'; // Chargement léger
            video.value.controls = false;
            
            // Ne pas lancer automatiquement
            video.value.pause();
            video.value.currentTime = 0;
        };

        const playVideo = () => {
            if(video.value && !isMobile.value && !isPlaying.value) {
                video.value.play().then(() => {
                    isPlaying.value = true;
                }).catch(() => {});
            }
        };
        
        const resetVideo = () => {
            if(video.value && !isMobile.value && isPlaying.value) {
                video.value.pause();
                video.value.currentTime = 0;
                isPlaying.value = false;
            }
        };

        onMounted(() => {
            isMobile.value = checkMobile();
            
            if(isMobile.value) {
                initMobileVideo();
            } else {
                initDesktopVideo();
            }
        });

        return {
            video, 
            isMobile,
            playVideo, 
            resetVideo
        };
    }
}

</script>

<template>
    <!-- Video Hover -->
    <!-- Debug -->
    <div v-if="isMobile" class="fixed top-0 left-0 bg-red-500 text-white p-2 text-xs z-50">
        Mobile - Video: {{ videoSrc }}
    </div>
    <div v-else class="fixed top-0 left-0 bg-blue-500 text-white p-2 text-xs z-50">
        Desktop - Video: {{ videoSrc }}
    </div>

    <div 
        v-if="!isMobile"
        @mouseenter="playVideo" 
        @mouseleave="resetVideo" 
        class="relative md:w-[50vh] w-full h-32 cursor-pointer"
    >
        <!-- Version Desktop - avec hover -->
        <video 
            ref="video"
            muted
            loop
            playsinline
            class="absolute object-cover w-full h-full"
        >
            <source :src="videoSrc" type="video/webm"/>
            <source :src="videoSrc.replace('.webm', '.mp4')" type="video/mp4"/>
        </video>
    </div>

    <!-- Version Mobile - autoplay sans interactions -->
    <div 
        v-else
        class="relative w-full h-32 pointer-events-none"
    >
        <video 
            ref="video"
            muted
            loop
            playsinline
            controlslist="nodownload nofullscreen noremoteplayback"
            disablepictureinpicture
            class="absolute object-cover w-full h-full pointer-events-none"
        >
            <source :src="videoSrc" type="video/webm"/>
            <source :src="videoSrc.replace('.webm', '.mp4')" type="video/mp4"/>
        </video>
    </div>

</template>