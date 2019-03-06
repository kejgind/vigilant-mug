<template>
  <div class="modal-card" style="width: auto">
    <img :src="image_url" :alt="name">
  </div>
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
