import bookDescription from '../cmps/book-description.cmp.js';
import reviewAdd from '../cmps/review-add.cmp.js';
import { eventBus } from '../services/event-bus.service.js';
import { bookService } from '../services/book.service.js';

export default {
  props: ['books'],
  template: `
        <section v-if="book" class="book-details app-main">
          <h3>book Details:</h3>
            <p>  pageCount:{{book.pageCount}} {{pageCount}}</p>
            <p> published-date:{{book.publishedDate}} {{publishedDate}}</p>
            <p > price:{{book.listPrice.amount}}</p>
            <p>  language:{{book.language}}</p>
           <book-description :description="book.description"> </book-description>
           <br>
           <br>
           
           <div v-for="(review,idx) in book.reviews" :key="review.id" class="review-container"> 
           <p>name:{{review.fullName}}</p>
           <p>date:{{review.date}}</p>
           <p>rate:{{review.rate}}</p>
           <p>review:{{review.text}}</p>
            <button @click="remove(idx)"> X </button>
        </div>
           
 
           <review-add  @reviews="saveReview"></review-add>
           <!-- @reviewed="setReview" -->
           <br>
           <br>
           <router-link to="/book/"> back to books </router-link>

        </section>
            <section v-else class="loader app-main">
                <h2>Loading...</h2>
        </section>
    `,
  data() {
    return {
      book: null,
    };
  },
  created() {
    const { bookId } = this.$route.params;
    bookService.getById(bookId).then((book) => (this.book = book));
  },
  methods: {
    saveReview(review) {
      if (this.book.reviews) {
        var reviews = this.book.reviews;
        reviews.push(review);
      } else reviews = [review];
      var updatedBook = { ...this.book, reviews };
      bookService
        .save(updatedBook)
        .then((book) => (this.book = book))
        .then(() => {
          const msg = {
            txt: `book ${this.book.id} was successfully saved!`,
            type: 'success',
          };
          eventBus.$emit('showMsg', msg);
        })
        .catch((err) => {
          console.log('err', err);
          const msg = {
            txt: 'Error. Please try later',
            type: 'error',
          };
          eventBus.$emit('showMsg', msg);
        });
    },

    remove(idx) {
      this.book.reviews.splice(idx, 1);
      bookService
        .save(this.book)
        .then(() => {
          const msg = {
            txt: `was successfully removed`,
            type: 'success',
          };
          eventBus.$emit('showMsg', msg);
        })
        .catch((err) => {
          console.log('err', err);
          const msg = {
            txt: 'Error. Please try later',
            type: 'error',
          };
          eventBus.$emit('showMsg', msg);
        });
    },
  },
  computed: {
    pageCount() {
      if (this.book.pageCount > 500) return 'Long Reading';
      if (this.book.pageCount > 200) return 'Decent Reading';
      if (this.book.pageCount > 100) return 'Light Reading';
    },
    publishedDate() {
      let year = new Date().getFullYear();
      // console.log('year', year);
      if (this.book.publishedDate > year - 10) return 'Veteran Book';
      if (this.book.publishedDate < year - 1) return 'New';
    },
  },
  components: {
    bookDescription,
    reviewAdd,
    bookService,
    eventBus,
  },
};
