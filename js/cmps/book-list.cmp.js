
import bookPreview from './book-preview.cmp.js'



export default {
  props: ['books'],
  template: `
        <ul class="book-list">
            <li v-for="book in books" :key="book.id" class="book-preview-container" >
                <book-preview :book="book" @click.netive="log" />
         
                <div class="actions">
                <router-link :to="'/book/'+book.id" >Details  </router-link>
                </div>
                
            </li>
        </ul>
    `,
  methods: {
    log() {
      console.log('Logging.....');
    },
  },
  components: {
    bookPreview,

  },
};
