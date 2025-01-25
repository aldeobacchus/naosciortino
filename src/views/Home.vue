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
  
  <div class="flex flex-row p-0">

    <div class="container">

      <ArticleText v-if="article" :article="article"/>
      
      <Links @articleSelected="updateArticle"/>

    </div>

    <ArticleImage class="w-1/2" v-if="article" :article="article"/>

  </div>

</template>

<style scoped>
</style>
