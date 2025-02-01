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

    <div class="flex flex-col items-start">

      <ArticleText class="fixed  pl-[25%] pr-[25%]" v-if="articleStore.article" />
      
      <Links class="top-[50%] w-[25%] fixed" />

    </div>

    <ArticleImage class="inline-block ml-[75%]" v-if="articleStore.article"/>

  </div>

</template>

<style scoped>
</style>
