export default {
  // props: ['books'],
  template: `
        <section class="review-add">
  <form @submit.prevent="addReview">
    <fieldset>
      <legend>Add review:</legend>
      <br>
      <label for="fullname">Full name: </label><br>
      <input v-model.lazy="review.fullName" type="text" id="fullname" autofocus name="fullname" value=""
        placeholder="Enter Name" autocomplete="off"><br>
      <br>
      <label for="rate">rate Book:</label><br>
      <!-- <input
    v-model="range" type="range" id="price" name="price" min="0" max="1150"
  /> -->
      <select v-model="review.rate" type="range" id="rate" name="rate" value="">
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>

      <!-- <input v-model.l="review.date" type="date" id="start" name="date"
                value="datepicker"> -->
      <br>
      <label for="book">What did you think of the book:</label>
      <br>
      <textarea v-model.lazy="review.text" id="review" name="bookreview" rows="3" cols="30"
        placeholder="Tell us your thoughts ">
               </textarea>
      <br>
      <button type="submit">submit</button>
    </fieldset>
  </form>
</section>
      `,
  data() {
    return {
      review: {
        fullName: '',
        rate: null,
        date: new Date().toDateString(),
        text: '',
      },
    };
  },
  methods: {
    addReview() {
      console.log('this.review', this.review);
      this.$emit('reviews', this.review);
    },
  },
};
