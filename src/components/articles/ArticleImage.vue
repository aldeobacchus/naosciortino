<script>    
import { useArticleStore } from '../../stores/articleStore';

export default {
    setup() {
        const articleStore = useArticleStore();
        return{articleStore}
    },
    methods: {
        getImageUrl(url){
            return new URL(url, import.meta.url).href
        }
    }
};
1
</script>

<template>


    <div>
        
        <img 
            v-for="(image, index) in articleStore.article.images" 
            :key="index"
            :src=getImageUrl(image)
            alt="`Image ${index + 1} pour ${articleStore.activeArticle.title}`">

    </div>


    
</template> 