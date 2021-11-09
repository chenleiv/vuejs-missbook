import { bookService } from '../services/book.service.js';
import { eventBus } from '../services/event-bus.service.js';
import bookList from '../cmps/book-list.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookAdd from '../cmps/book-add.cmp.js'

// import bookEdit from './book-edit.cmp.js';

export default {
  template: `
        <section class="book-app app-main">
        <book-filter @filtered="setFilter"></book-filter>
        <book-add @addSuccess="addNewBook"></book-add>
<book-list :books="booksToShow"></book-list>
<!-- <book-details @close="closeDetails"></book-details> -->

        </section>
    `,
  data() {
    return {
      books: null,
      //   selectedBook: null,
      filterBy: null,
    };
  },
  created() {
    this.loadBooks();
  },
  methods: {
    addNewBook() {
      this.loadBooks()
    },
    loadBooks() {
      bookService.query().then((res) => {
        this.books = res;
      });
    },

    closeDetails() {
      this.selectedBook = null;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      const { title, toPrice, fromPrice } = this.filterBy;
      const searchStr = title.toLowerCase();
      const booksToShow = this.books.filter((book) => {
        return (
          (book.title.toLowerCase().includes(searchStr) &&
            book.listPrice.amount >= fromPrice &&
            book.listPrice.amount <= toPrice) ||
          !toPrice
        );
      });
      return booksToShow;
    },
  },
  components: {
    bookList,
    bookFilter,
    eventBus,
    bookAdd,

  },
};
