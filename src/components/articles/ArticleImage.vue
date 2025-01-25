<script>

import { ref } from 'vue';
import { computed } from 'vue';

    
    export default {
    props: {
        article: {
        type: Object,
        required: true,
        }
    },
    methods: {
        getFolderPath() {
            const [ref1, ref2] = this.article.id.split(".");
            const basePath = `/src/assets/images/${ref1}/${ref2}`;

            return basePath;

        }
    }
};
1
</script>

<template>


    <div>
        
        <!--display image -->
        <img :src="`${getFolderPath()}/chevaux.jpg`" alt="article image" class="w-full h-auto object-cover" />
        <img :src="`${getFolderPath()}/dessin.jpg`" alt="article image" class="w-full h-auto object-cover" />
        <img :src="`${getFolderPath()}/chevalier.jpg`" alt="article image" class="w-full h-auto object-cover" />
        <img :src="`${getFolderPath()}/bonhommes.jpg`" alt="article image" class="w-full h-auto object-cover" />

    </div>


    
</template> 