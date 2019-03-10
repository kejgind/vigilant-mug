<template>
  <article class="box" :class="[themeIsDark ? 'has-background-grey-darker has-text-light' : '']">
    <div class="media">
      <div class="media-left">
        <figure
          class="image is-square is-40x40 beer-image is-size-7"
          @click="showImage([beer.image_url, beer.name])"
        >
          <img class="image-small" :src="beer.image_url" :alt="beer.name" @error="placeholderImg">
        </figure>
      </div>
      <div class="media-content">
        <p class="media-text">
          Beer name:
          <strong :class="[themeIsDark ? 'has-text-light' : '']">{{beer.name}}</strong>
        </p>
        <p class="media-text">
          Beer type:
          <strong :class="[themeIsDark ? 'has-text-light' : '']">{{beer.type}}</strong>
        </p>
        <p class="media-text">
          Beer price per litre:
          <strong
            :class="[themeIsDark ? 'has-text-light' : '']"
          >{{beer.pricePerLitre}}</strong>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import BeerImageModal from "@/components/MainView/BeerImageModal";
import { loadPlaceholderImg } from "@/functions/loadPlaceholderImg";
export default {
  name: "BeerCard",
  props: { beer: Object },
  methods: {
    showImage(data) {
      this.$modal.open({
        parent: this,
        component: BeerImageModal,
        hasModalCard: true,
        props: {
          url: data[0],
          alt: data[1]
        }
      });
    },
    placeholderImg(e) {
      loadPlaceholderImg(e);
    }
  },
  computed: {
    themeIsDark() {
      return this.$store.getters.layoutDark;
    }
  }
};
</script>

<style lang="scss" scoped>
.media-text:not(:last-of-type) {
  margin-bottom: 0.3rem;
}
.beer-image {
  cursor: pointer;
}
.image-small {
  border-radius: 50%;
}
</style>


