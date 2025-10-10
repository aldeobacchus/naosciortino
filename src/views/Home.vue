<script >
import ArticleText from '../components/articles/ArticleText.vue'
import ArticleImage from '../components/articles/ArticleImage.vue'
import Links from '../components/Links.vue'
import VideoHover from '../components/VideoHover.vue';
import { useArticleStore } from '../stores/articleStore';
import landingVideo from '@/assets/video/landing.webm';

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
      return{articleStore,landingVideo}
    }

}
</script>

<template>
  
  <div class="flex flex-col md:flex-row px-4">

    <div class="flex flex-col items-start gap-8">
      
      <VideoHover v-if="!articleStore.article" :videoSrc="landingVideo" />
      
      <div class="flex flex-row ">
        <Links />
        <div class="flex flex-row">

          <ArticleText v-if="articleStore.article"/>

          <ArticleImage v-if="articleStore.article" />
        </div>
      </div>

    </div>
    
    
    

  </div>

</template>

<style scoped>
</style>
