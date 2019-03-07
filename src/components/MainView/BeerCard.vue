<template>
  <article class="box">
    <div class="media">
      <div class="media-left">
        <figure
          class="image is-40x40 beer-image is-size-7"
          @click="showImage([beer.image_url, beer.name])"
        >
          <img class="is-rounded" :src="beer.image_url" :alt="beer.name">
        </figure>
      </div>
      <div class="media-content">
        <p class="media-text">
          Beer name:
          <strong>{{beer.name}}</strong>
        </p>
        <p class="media-text">
          Beer type:
          <strong>{{beer.type}}</strong>
        </p>
        <p class="media-text">
          Beer price per litre:
          <strong>{{beer.pricePerLitre}}</strong>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import BeerImageModal from "@/components/MainView/BeerImageModal";
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
</style>


