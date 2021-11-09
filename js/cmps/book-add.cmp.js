import { bookService } from '../services/book.service.js';

export default {
    template: `
        <section class="book-add">
        <div>
            <label>Search: </label>
            <input @change="search" v-model="searchBy" type="text" placeholder="Title">
            <ul class="google-books-list">
                <li class="google-book-preview" v-for="book in googleBooks.slice(0, 5)">{{book.volumeInfo.title}}<span @click="add(book)">+</span></li>
            </ul>
        </div>
        </section>
    `,
    data() {
        return {
            searchBy: '',
            googleBooks: []
        }
    },
    created() {

    },
    methods: {
        search() {
            console.log('searchBy', this.searchBy);
            bookService.getBooksGoogleApi(this.searchBy)
                .then(googleBooks => {
                    console.log('googleBooks from book-add', googleBooks);
                    this.googleBooks = googleBooks
                })
        },
        add(newBook) {
            bookService.addGoogleBook(newBook)
                .then(googleBook => {
                    console.log('googleBook was add from add', googleBook);
                    this.$emit('addSuccess', 'newBookAdd')
                })
        }
    },
}