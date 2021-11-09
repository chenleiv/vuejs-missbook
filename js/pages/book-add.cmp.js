import { bookService } from '../services/book.service.js';

export default {
    template: `
        <section class="book-add app-main">
        <div>
            <label>Search: </label>
            <input @input="filter" v-model="filterBy.title" type="text" placeholder="Title">
        </div>
        </section>
    `,
    data() {

    },
    created() {

    },

};