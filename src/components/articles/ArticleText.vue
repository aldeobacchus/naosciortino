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

    <div class="flex flex-col mb-8">
        <h4 class="uppercase font-epkyouka">{{articleStore.article.subtitle}}</h4>
        <span class="pl-8 whitespace-pre-wrap">{{articleStore.article.content}}</span>
    </div>
    
</template>