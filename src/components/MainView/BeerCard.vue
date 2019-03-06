<template>
  <article class="box">
    <div class="media">
      <div class="media-left">
        <figure class="image is-40x40 beer-image" @click="showImage()">
          <img class="is-rounded" :src="beer.image_url" :alt="beer.name">
        </figure>
      </div>
      <div class="media-content">
        <!-- <div class="content"> -->
        <p class="media-text">
          Beer name:
          <strong>{{beer.name}}</strong>
        </p>
        <p class="media-text">
          Beer type:
          <strong>{{beer.type}}</strong>
        </p>
        <p class="media-text">
          Beer price per liter:
          <strong>{{beer.price}}</strong>
        </p>
        <!-- </div> -->
      </div>
    </div>
  </article>
</template>

<script>
import BeerImageModal from "@/components/MainView/BeerImageModal";
export default {
  name: "Beer Card",
  data() {
    return {
      beer: {
        product_id: 2091011,
        name: "Paulaner Hefe-Weissbier",
        size: "6  ×  Bottle 330 ml",
        price: "14.95",
        beer_id: 2091,
        image_url:
          "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/brand/hero/Paulaner_TBS%20product%20images%202013.jpg?itok=c07a9fzP",
        category: "Import",
        abv: "5.5",
        style: "N/A",
        attributes: "N/A",
        type: "Lager",
        brewer: "Paulaner Brauerei Gruppe GMBh",
        country: "Germany",
        on_sale: false
      }
    };
  },
  methods: {
    showImage() {
      this.$modal.open({
        parent: this,
        component: BeerImageModal,
        hasModalCard: true
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


