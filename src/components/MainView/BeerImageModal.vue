<template>
  <div class="modal-card" style="width: auto">
    <img :src="url" :alt="alt" @error="placeholderImg">
  </div>
</template>

<script>
import { loadPlaceholderImg } from "@/functions/loadPlaceholderImg";
export default {
  name: "BeerImageModal",
  props: {
    url: String,
    alt: String
  },
  methods: {
    placeholderImg(e) {
      loadPlaceholderImg(e);
    }
  }
};
</script>
