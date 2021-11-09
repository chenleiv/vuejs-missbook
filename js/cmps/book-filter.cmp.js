export default {
  template: `
        <section class="book-filter">
        <div class="search">
                <label>Search & Filter</label>
                <input @input="filter" v-model="filterBy.title" type="text" placeholder="Search...">
            </div>
            <br>
            <form class="filter">
                <input  v-model.number.lazy="filterBy.fromPrice" type="number" placeholder="From...">
                <input  v-model.number.lazy="filterBy.toPrice" type="number" placeholder="To...">
                <button @click.prevent="filter">Filter price</button>
            </form>
</section>
    `,
  data() {
    return {
      filterBy: {
        title: '',
        fromPrice: 0,
        toPrice: Infinity,
      },
    };
  },
  methods: {
    filter() {
      this.$emit('filtered', { ...this.filterBy });
      //deep copy
      // this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
