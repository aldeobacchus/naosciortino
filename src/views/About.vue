<script>

import { data } from 'autoprefixer';
import { reactive, ref } from 'vue';
import chevaux from '@/assets/images/chevaux.jpg';
import bonhomme from '@/assets/images/bonhommes.jpg';

export default {
    name: 'About',
    setup() {
        const visibleImage = ref(null);
        const isAnImageVisible = ref(false);
        const mousePosition = ref({ x: 0, y: 0 });

        const showImage = (event, image) =>{
            //console.log("x : " + event.clientX + " y : " + event.clientY);
            if (!isAnImageVisible.value) {
                console.log('show image');
                visibleImage.value = image;
                console.log(image);
                isAnImageVisible.value = true;
            }
            mousePosition.value.x = event.clientX;
            mousePosition.value.y = event.clientY;
            
        }
        const hideImage = () => {
            console.log('hide image');
            isAnImageVisible.value = false;
            visibleImage.value = null;
            console.log(isAnImageVisible.value);
        }

        return { chevaux, bonhomme, visibleImage, isAnImageVisible, mousePosition, showImage, hideImage }
    }
}

</script>

<template>
    <!-- About -->
    <div>
        <div v-if="isAnImageVisible" class="image-container" :style="{ top: (mousePosition.y + 20 )+ 'px', left: (mousePosition.x + 20) + 'px' }">
            <img :src="visibleImage" alt="image" style="width:150px" />
        </div>

        <div class="px-6 pb-6 flex flex-col gap-4">
            <!-- Top row -->
            <div class="flex flex-col md:flex-row w-full gap-4 text-justify">
                <!-- Left part-->
                <section class="flex-1">
                    <h1>Contact ::</h1>
                    <div class="flex flex-row gap-8 ml-20 md:ml-32">
                        <a href="">CV</a>
                        <a href="">Mastodon</a>
                        <a href="">IG</a>
                        <a href="">SC</a>
                    </div>      
                    <br>
                    <p>
                        Nao Sciortino <img @mousemove="(event) => showImage(event, chevaux)"  @mouseleave="hideImage()" class="h-4 w-4 inline-block" :src="chevaux">(b.2001) is a graphic designer & interdisciplinary artist
                        based in Toulouse, South of France. Their practice intersects raw material & narratives, oscillating through sound, video, photography, installation, or human patterns; where poetic rhythms emerge from everyday life.
                    </p>
                </section>
                
                <!-- Right part -->
                <section class="flex-1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        <img @mousemove="(event) => showImage(event, bonhomme)"  @mouseleave="hideImage()" style="width:5rem; height:1rem; display:inline-block" :src="bonhomme">
                    </p>
                </section>
            </div>

            <!-- Bottom row -->
            <div class="flex flex-col md:flex-row w-full gap-4">
                <!-- Left part-->
                <section class="flex-1">

                    <h1>(Education)</h1>

                    <h2 class="pl-32">¯2024</h2>
                    <p>(BA) DNA Graphic Design - with high honors</p>
                    <p>Toulouse Higher Institute of Arts & Design</p>

                    <h2 class="pl-32">¯2023</h2>
                    <p>Workshop with Félicité Landrivon/Brigade Cynophile,</p>
                    <p class="italic">Screen-printing & Graphic Design</p>
                    <p>Toulouse Higher Institute of Arts & Design</p>

                    <h2 class="pl-32">¯2022</h2>
                    <p>Workshop with Paulien Oltheten</p>
                    <p class="italic">Art Performance & Anthropologic research</p>
                    <p>Toulouse Higher Institute of Arts & Design</p>

                    <h2 class="pl-32">¯2020</h2>
                    <p>Cinema theory & Audiovisual practices</p>
                    <p>University of Toulouse Jean Jaurès</p>

                    <h2 class="pl-32">¯2019</h2>
                    <p>(HS) Baccalaureate Cinema theory - with distinctions</p>

                    <br></br>
                    
                    <h1>(Residences)</h1>

                    <h2 class="pl-32">¯2023-present</h2>
                    <p>'Remembrances' - a monthly show on Fade Radio,</p>
                    <p class="italic">Curation, exploration through sound & mixing practices in order to shape narratives</p>
                    <p>Online/Athens, GR</p>

                    <h2 class="pl-32">¯May 2023</h2>
                    <p>'Repress Collective: Live Music Short Series'</p>
                    <p class="italic">Scenography, live music performance</p>
                    <p>La Peyrigne - Champs De Recherches Artistiques, Gers FR</p>

                </section>

                <section class="flex-1">

                    <h1>(Experience)</h1>

                    <h2 class="pl-32">¯2024-2025</h2>
                    <p>Audimat-Editions</p>
                    <p class="italic">Communication & Editorial Assistant</p>
                    <p>Toulouse, FR</p>

                    <h2 class="pl-32">¯2023</h2>
                    <p>Assisting Graphic Designer & Musician Apu Nanu</p>
                    <p class="italic"> Graphic Design</p>
                    <p>Athens, GR</p>

                    <h2 class="pl-32">¯2022-present</h2>
                    <p>Freelance Graphic Designer</p>
                
                    <br>

                    <h1>(Featured on)</h1>
                    <p>Egregore, Fade radio, Hong Kong Community Radio (HKCR), Kiosk Radio, Lyl Radio Paris</p>

                    <br>

                    <h1>(Part of)</h1>
                    <p>Repress Collective - co-founder</p>
                    <p>Global Url Nation (GUN) - member</p>

                    
                </section>
            </div>
        </div>      
    </div>
    
</template> 

<style scoped>
    .image-container {
        position: fixed;
        z-index: 1000;
        background-color: red;
    }
</style>