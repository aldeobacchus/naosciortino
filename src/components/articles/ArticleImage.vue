<script>    
import { useArticleStore } from '@/stores/articleStore';

export default {
    setup() {
        const articleStore = useArticleStore();
        console.log("articleStore : ")
        console.log(articleStore);
        return{articleStore}
    },
    methods: {
        getImageUrl(url){
            console.log("url :");
            console.log(url);
            return `${import.meta.env.BASE_URL}${url}`;
        }
    }
};

</script>

<template>

    <!-- Article images -->
    <div class="inline-block">
        <img 
            v-for="(image, index) in articleStore.article.images" 
            :key="index"
            :src=getImageUrl(image)
            :alt="`Image ${index + 1} - ${image}`">
        </img>

    </div>


    
</template> 