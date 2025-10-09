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
            return new URL(url, import.meta.url).href
        }
    }
};
1
</script>

<template>

    <!-- Article images -->
    <div class="inline-block md:ml-[80%]">
        <img 
            v-for="(image, index) in articleStore.article.images" 
            :key="index"
            :src=getImageUrl(image)
            :alt="`Image ${index + 1} - ${articleStore.activeArticle?.title}`">

    </div>


    
</template> 