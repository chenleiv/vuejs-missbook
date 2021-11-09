export default {
  props: ['book'],
  template: `
        <section class="book-preview">
            <img class="sale-img" v-if="book.listPrice.isOnSale" src='./../img/sale-icon.png'/>
            <img :src="book.thumbnail">
            <p>title: {{book.title}}</p>
            
            <p > price: <span :class="priceColor">{{book.listPrice.amount}} {{currencyIcon}} </span></p>
            
        </section>
    `,
  data() {
    return {
      symbol: this.book.listPrice.currencyCode,
      currency_symbols: {
        USD: '$', // US Dollar
        EUR: '€', // Euro
        ILS: '₪', // Israeli New Sheqel
      },
    };
  },
  computed: {
    currencyIcon() {
      return this.currency_symbols[this.symbol];
    },
    isOnSale() {
      return this.book.listPrice.isOnSale;
    },
    priceColor() {
      return {
        red: this.book.listPrice.amount > 150,
        green: this.book.listPrice.amount < 20,
      };
    },
  },
};
