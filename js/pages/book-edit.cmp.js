import { bookService } from '../services/book.service.js';

export default {
  template: `
        <section class="book-edit app-main">
   <h3>Add a new book</h3>
   <form v-if="bookToEdit" @submit.prevent="save">
     <input v-model="bookToEdit.title" type="text" placeholder="title">
     <input v-model.number="bookToEdit.maxSpeed" type="number" placeholder="price">
     <button>Save</button>
   </form>
 </section>
    `,
  data() {
    return {
      bookToEdit: null,
    };
  },
  created() {
    const { bookId } = this.$route.params;
    if (bookId) {
      bookService.getById(bookId).then((book) => (this.bookToEdit = book));
      // } else {
      //   this.bookToEdit = bookService.getEmptyBook();
    }
  },
  methods: {
    save() {
      bookService
        .save(this.bookToEdit)
        .then((book) => this.$router.push('/book'));
    },
  },
};
