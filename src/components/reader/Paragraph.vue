<template>
  <div>
    <div class="paragraph">
      <WordTile
        v-for="item in words"
        :key="item.index"
        :word="item.word"
        :selected="item === selectedWord"
        @click="onWordClick(item)"
      ></WordTile>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WordTile from "@/components/reader/WordTile.vue";
import { Token } from "@/common/types";

function isWord(word: string): boolean {
  return Boolean(word.match(/[a-z']+/gi));
}

export default defineComponent({
  name: "Paragraph",
  props: {
    content: String,
    selectedWord: Object,
  },
  components: {
    WordTile,
  },
  data() {
    return {
      words: [] as Token[],
    };
  },
  methods: {
    onWordClick(item: Token) {
      if (isWord(item.word)) {
        this.$emit("selectWord", {
          target: item,
        });
      }
    },
  },
  mounted() {
    this.words = !this.content
      ? []
      : this.content.split(" ").map((word, index) => ({ word, index }));
  },
});
</script>

<style scoped lang="less">
.paragraph {
  display: flex;
  flex-wrap: wrap;
  margin: 6px 0;
}
</style>
