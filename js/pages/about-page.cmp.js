// import { eventBus } from '../services/event-bus.service.js';

export default {
  template: `
        <section class="about-page app-main">
            <img class="about-img" src='../img/about.png'/>
            <h3 ref="header">About us...</h3>
            <p>Book Depository (bookdepository.com) is a leading international book retailer with a unique offer -- over 20 million books and free delivery worldwide (with no minimum spend).
We ship thousands of books every day from our fulfillment centres in Gloucester, United Kingdom, and Melbourne, Australia, to more than 130 countries across the world -- displaying prices in 37 different local currencies. </p>

            <!-- <button @click="callBus">Call the bus!</button> -->
        </section>
    `,
  methods: {
    callBus() { },
  },
  created() {
    console.log('Created');
  },
  mounted() {
    console.log('Mounted');
    console.log(this.$refs.header);
  },
};
