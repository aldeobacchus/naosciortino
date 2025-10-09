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
  
  <div class="flex flex-col md:flex-row px-4">

    <div class="flex flex-col items-start gap-8">
      
      <VideoHover v-if="!articleStore.article" videoSrc="./assets/video/landing.webm" />

      <Links />

      <ArticleText v-if="articleStore.article"/>

    </div>
    
    
    <ArticleImage v-if="articleStore.article" />

  </div>

</template>

<style scoped>
</style>
