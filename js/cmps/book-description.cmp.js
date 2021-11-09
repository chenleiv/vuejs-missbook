export default {
  props: ['description'],
  template: `
        <section class="book-description">
        <p v-if="isFullLeng"> description:{{bookDescription}} </p>
        <button :class="showBtn" @click="isShow = !isShow" >{{showTxt}}</button>

        </section>
    `,
  data() {
    return {
      isShow: false,
      isFullLeng: true,

    };
  },
  computed: {
    bookDescription() {
      if (this.description.length > 100 && !this.isShow) {
        return this.description.slice(0, 100);
      } else {
        return this.description;
      }
    },
    showTxt() {
      return this.isShow ? 'show less...' : 'show more...';
    },
    showBtn() {
      return this.description.length > 100 ? 'show' : 'hide';
    },
  }
};