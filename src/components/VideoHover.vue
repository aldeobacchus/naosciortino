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
        const debugInfo = ref({
            state: 'init',
            error: null,
            canPlay: false,
            isPlaying: false
        });

        // Détection mobile
        const checkMobile = () => {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        };

        const initMobileVideo = async () => {
           if(!video.value) {
                debugInfo.value.state = 'no_video_element';
                return;
            }

            debugInfo.value.state = 'loading';
            
            // Configuration mobile
            video.value.playsinline = true;
            video.value.muted = true;
            video.value.loop = true;
            video.value.preload = 'auto';
            video.value.controls = false;
            video.value.disablePictureInPicture = true;

            //Events
            video.value.addEventListener('loadstart', () => {
                debugInfo.value.state = 'load_started';
            });

            video.value.addEventListener('loadeddata', () => {
                debugInfo.value.state = 'data_loaded';
                debugInfo.value.canPlay = true;
            });

            video.value.addEventListener('canplay', () => {
                debugInfo.value.state = 'can_play';
                attemptAutoplay();
            });

            video.value.addEventListener('playing', () => {
                debugInfo.value.state = 'playing';
                debugInfo.value.isPlaying = true;
            });

            video.value.addEventListener('error', (e) => {
                debugInfo.value.state = 'error';
                debugInfo.value.error = video.value.error ? video.value.error.message : 'Unknown error';
            });

            const attemptAutoplay = () => {
                video.value.play().then(() => {
                    debugInfo.value.state = 'autoplay_success';
                }).catch(error => {
                    debugInfo.value.state = 'autoplay_blocked';
                    // Réessayer au premier touch
                    document.addEventListener('touchstart', () => {
                        debugInfo.value.state = 'retrying_after_touch';
                        video.value.play().catch(e => {
                            debugInfo.value.state = 'retry_failed';
                        });
                    }, { once: true });
                });
            };

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
            debugInfo,
            playVideo, 
            resetVideo
        };
    }
}

</script>

<template>
    <!-- Video Hover -->
    <!-- Debug -->
    <div 
        v-if="isMobile" 
        class="fixed top-1 left-2 right-2 bg-black text-white p-3 text-sm z-50 rounded shadow-lg opacity-80"
    >
        <div class="grid grid-cols-2 gap-2">
            <div>📱 Mobile: OUI</div>
            <div>🎬 Source: {{ videoSrc }}</div>
            <div>📊 État: {{ debugInfo.state }}</div>
            <div>▶️ Lecture: {{ debugInfo.isPlaying ? 'OUI' : 'NON' }}</div>
            <div v-if="debugInfo.error" class="col-span-2 text-red-400">
                ❌ Erreur: {{ debugInfo.error }}
            </div>
        </div>
    </div>

    <!-- Debug overlay desktop (moins visible) -->
    <div 
        v-else
        class="fixed top-1 left-1 bg-blue-500 text-white p-1 text-xs z-50 rounded opacity-70"
    >
        Desktop
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