<template>
  <div class="modal-card" style="width: auto">
    <img :src="url" :alt="alt">
  </div>
</template>

<script>
export default {
  name: "BeerImageModal",
  props: {
    url: String,
    alt: String
  }
};
</script>
