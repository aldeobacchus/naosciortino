<script>
import { useArticleStore } from '../../stores/articleStore';

export default {
    setup(){
        const articleStore = useArticleStore();
        return{articleStore};
    }
};

</script>

<template>
    <!-- Article text -->
    <div class=" md:ml-[25vw] flex flex-col md:max-w-[50vw]">
        <h4 class="uppercase font-epkyouka">{{articleStore.article.subtitle}}</h4>
        <span class="pl-8 whitespace-pre-wrap text-justify">{{articleStore.article.content}}</span>
        <div class="sticky top-full"></div>
    </div>
    
</template>