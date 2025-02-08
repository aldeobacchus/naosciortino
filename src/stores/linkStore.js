// This store is used to store the link selected in the content.json file to share it beetween the components
// It is used to fold up links whhen the home is clicked in the navbar
import {defineStore} from 'pinia';

export const useLinkStore = defineStore('link', {
    state : () => ({
        link: {
            id: 0,
            title: "",
            articles : []
        }
    }),
    actions: {
        updateLink(newLink) {
            this.link = newLink;
        }
    }
}); 