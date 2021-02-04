<template>
  <Reader :doc="docContent"/>
</template>

<script lang="ts">
import Reader from '@/components/reader/Reader.vue';
import { defineComponent } from "vue";
export default defineComponent({
  name: "ReaderView",
  components: {
    Reader
  },
  data() {
    return {
      docContent: `
        In an interview with Canadian broadcaster CBC News, International Development Minister, Karina Gould, was asked why the country decided to access Covax vaccines now. 
        Our top priority is to ensure Canadians have access to vaccines," the minister said. "Covax's objective is to provide vaccines for 20% of the populations of all member states, both self-financing and those who will receive donations. 
        Canada made the decision, as other countries have, to take on this first allocation, because we recognise how important it is that all Canadians have access to vaccines.
      `
    }
  },
});
</script>
