<script >
import ArticleText from '../components/articles/ArticleText.vue'
import ArticleImage from '../components/articles/ArticleImage.vue'
import Links from '../components/Links.vue'
import { useArticleStore } from '../stores/articleStore';

export default {
    name: 'Home',
    components: {
        ArticleText,
        ArticleImage,
        Links
    },
    setup() {
      const articleStore = useArticleStore();
      return{articleStore}
    }

}
</script>

<template>
  
  <div class="flex flex-row">

    <div class=" fixed w-3/4 top-24 flex flex-col items-start">

      <ArticleText class="pl-[30rem]" v-if="articleStore.article" />
      
      <Links/>

    </div>

    <ArticleImage class="inline-block ml-[75%]" v-if="articleStore.article"/>

  </div>

</template>

<style scoped>
</style>
