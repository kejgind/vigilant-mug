<template>
  <figure class="beer-img-modal">
    <img :src="image_url" :alt="name">
  </figure>
</template>

<script>
export default {
  data() {
    return {
      image_url:
        "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/brand/hero/Paulaner_TBS%20product%20images%202013.jpg?itok=c07a9fzP",
      name: "Paulaner Hefe-Weissbier"
    };
  }
};
</script>

<style lang="scss" scoped>
.beer-img-modal {
  text-align: center;
}
</style>


