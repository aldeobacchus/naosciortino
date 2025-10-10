<script>
import articlesData from '@/assets/data/content.json'
import { useArticleStore } from '../stores/articleStore';
import { useLinkStore } from '../stores/linkStore';

export default {
    name: 'Links',
    data() {
        return {
            links: articlesData.themes,
        }
    },
    setup() {
        //article store init
        const articleStore = useArticleStore();
        const updateStoreArticle = (article) => {
            articleStore.updateArticle(article)
        }
        //link store init
        const linkStore = useLinkStore();
        const updateStoreLink = (link) => {
            linkStore.updateLink(link)
        }

        return{ articleStore, updateStoreArticle, linkStore, updateStoreLink}
    },
    methods: {
        // A method to display the Articles sublinks
        displayArticlesLinks(link) {
            this.updateStoreLink(link);
        },
        // The method used to select an article and update the store
        displayArticles(sublink){
            this.updateStoreArticle(sublink);
        }
    }
}
</script>

<template>
    <!-- Links -->
    <section class="md:top-[50%] md:w-[25vw] md:fixed flex flex-col">
        <div v-for="link in links" :key="link.id" class="flex flex-col">            

            <a @click="displayArticlesLinks(link)"> {{ link.title }} </a>
            
            <div v-if="linkStore.link.articles && linkStore.link.id === link.id" class="flex flex-col">
                <div v-for="sublink in linkStore.link.articles" :key="sublink.id">
                    <p v-if="sublink.type === 'title'" class="italic">{{ sublink.title }}</p>
                    <a v-if="sublink.type === 'article' " @click="displayArticles(sublink)" :class="[{ 'bg-gray-100' : articleStore.article === sublink},'ml-8']"> {{ sublink.title }} </a>
                </div>
            </div>

        </div>
    </section>
    
</template> 