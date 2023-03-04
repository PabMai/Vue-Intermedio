<script lang="ts">

import { defineComponent, ref } from 'vue';

// Version Composition API: setup
export default defineComponent({
  setup() {
    const counter = ref(0);

    const increase = () => {
      counter.value++;
    }

    return {
      // Properties
      counter,

      // Methods
      increase
    }
  }
});

</script>

<template>
  <div class="wrapper">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increase">+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
