<script>    
import { useArticleStore } from '../../stores/articleStore';

export default {
    setup() {
        const articleStore = useArticleStore();
        return{articleStore}
    },
    methods: {
        getFolderPath(article) {
            console.log("article : " + article);
            if(article){
                const [ref1, ref2] = article.id.split(".");
                const basePath = `/src/assets/images/${ref1}/${ref2}`;
                return basePath;
            } else return(null)
            
        }
    }
};
1
</script>

<template>


    <div>
        
        <!--display image -->
        <img :src="`${getFolderPath(articleStore.article)}/chevaux.jpg`" alt="article image" class="w-full h-auto object-cover" />
        <img :src="`${getFolderPath(articleStore.article)}/dessin.jpg`" alt="article image" class="w-full h-auto object-cover" />
        <img :src="`${getFolderPath(articleStore.article)}/chevalier.jpg`" alt="article image" class="w-full h-auto object-cover" />
        <img :src="`${getFolderPath(articleStore.article)}/bonhommes.jpg`" alt="article image" class="w-full h-auto object-cover" />

    </div>


    
</template> 