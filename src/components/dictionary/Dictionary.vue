<template>
  <div class="popup-wrapper">
    dictionary works
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { dict } from "@/service/dictService";

export default defineComponent({
  name: "Dictionary",
  props: {
    sentence: String,
    word: String,
  },
  mounted() {
    dict.youdao(this.word || "");
  },
});
</script>

<style scoped lang="less">
.popup-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 40vh;
}
</style>
