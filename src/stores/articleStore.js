// This store is used to store the article selected in the content.json file to share it beetzeen the components
import {defineStore} from 'pinia';

export const useArticleStore = defineStore('article', {
    state : () => ({
        article: null
    }),
    actions: {
        updateArticle(newArticle) {
            this.article = newArticle;
        }
    }
}); 