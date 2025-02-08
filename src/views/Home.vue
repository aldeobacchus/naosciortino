<script >
import ArticleText from '../components/articles/ArticleText.vue'
import ArticleImage from '../components/articles/ArticleImage.vue'
import Links from '../components/Links.vue'
import VideoHover from '../components/VideoHover.vue';
import { useArticleStore } from '../stores/articleStore';

export default {
    name: 'Home',
    components: {
        ArticleText,
        ArticleImage,
        Links,
        VideoHover
    },
    setup() {
      const articleStore = useArticleStore();
      return{articleStore}
    }

}
</script>

<template>
  
  <div class="flex flex-row px-4">

    <div class="flex flex-col items-start">

      <VideoHover v-if="!articleStore.article" videoSrc="/src/assets/video/landing.webm" />

      <ArticleText v-if="articleStore.article" class="fixed  pl-[25%] pr-[25%]"/>
      
      <Links class="top-[50%] w-[25%] fixed" />

    </div>

    <ArticleImage v-if="articleStore.article" class="inline-block ml-[75%]" />

  </div>

</template>

<style scoped>
</style>
