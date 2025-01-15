<script >
import ArticleText from '../components/articles/ArticleText.vue'
import ArticleImage from '../components/articles/ArticleImage.vue'
import Links from '../components/Links.vue'

export default {
    name: 'Home',
    components: {
        ArticleText,
        ArticleImage,
        Links
    },
    data(){
        return {
            article: null
        }
    },
    methods :{
        updateArticle(article){
          this.article = article;
        }
    }

}
</script>

<template>
  
  <div class="container">

    <ArticleText v-if="article" :article="article"/>
    
    <Links @articleSelected="updateArticle"/>

  </div>

</template>

<style scoped>
</style>
