<template>
  <span class="tile" :class="{ selected: selected }">
    {{ word }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WordTile",
  props: {
    word: String,
    selected: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped lang="less">
.tile {
  padding: 0 3px;
}

.tile.selected {
  background: lightblue;
  border-radius: 2px;
}
</style>
