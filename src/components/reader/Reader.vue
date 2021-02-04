<template>
  <div>
    <div class="paragraph">
      <Paragraph
        v-for="para in paragraphs"
        :key="para"
        :content="para"
        :selectedWord="selectedWord"
        @selectWord="onSelectWord"
      ></Paragraph>
    </div>
    <Dictionary :word="queryWord" v-if="queryWord"></Dictionary>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Paragraph from "@/components/reader/Paragraph.vue";
import Dictionary from "@/components/dictionary/Dictionary.vue";
import { Token } from "@/common/types";

export default defineComponent({
  name: "Reader",
  props: {
    doc: String,
  },
  components: {
    Paragraph,
    Dictionary,
  },
  data() {
    return {
      selectedWord: null as Token | null,
      queryWord: "",
    };
  },
  methods: {
    onSelectWord(event: { target: Token }) {
      const word = event.target as Token;
      console.log("on select word", word);
      if (word !== this.selectedWord) {
        this.selectedWord = word;
        this.queryWord = word.word;
      }
    },
  },
  computed: {
    paragraphs(): string[] {
      if (!this.doc) {
        return [];
      }
      return this.doc.split("\n");
    },
  },
});
</script>

<style scoped lang="less">
.paragraph {
  display: flex;
  flex-wrap: wrap;
}
</style>
