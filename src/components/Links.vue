<script>
import articlesData from '@/assets/data/content.json'
import { useArticleStore } from '../stores/articleStore';

export default {
    name: 'Links',
    data() {
        return {
            links: articlesData.themes,
            activeLink: null, //Le lien sur lequel l'utilisateur a cliqué sous lequel vont ss'afficher les sublinks
            activeSublinks: null, //Liste des sublinks qui vont s'afficher
            activeArticle: null
        }
    },
    setup() {
        const articleStore = useArticleStore();
        const updateStoreArticle = (article) => {
            articleStore.updateArticle(article)
        }
        return{ articleStore, updateStoreArticle}
    },
    methods: {
        // A method to display the Articles sublinks
        displayArticlesLinks(link) {
            console.log(link);
            this.activeLink = link;
            this.activeSublinks = link.articles;
        },
        displayArticles(sublink){
            this.activeArticle = sublink;
            this.updateStoreArticle(sublink);
        }
    }
}
</script>

<template>

    <!--Links to display the articles-->
    <section class="inline-flex flex-col">
        <div v-for="link in links" :key="link.id" class="flex flex-col">            

            <a @click="displayArticlesLinks(link)"> {{ link.title }} </a>
            
            <div v-if="activeSublinks && activeLink.id === link.id" class="flex flex-col">
                <div v-for="sublink in activeSublinks" :key="sublink.id">
                    <p v-if="sublink.type === 'title'" class="italic">{{ sublink.title }}</p>
                    <a v-if="sublink.type === 'article' " @click="displayArticles(sublink)" :class="[{ 'bg-gray-100' : activeArticle === sublink},'ml-8']"> {{ sublink.title }} </a>
                </div>
            </div>

        </div>
    </section>
    
</template> 