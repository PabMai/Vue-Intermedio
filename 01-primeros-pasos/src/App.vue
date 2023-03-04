<script  setup lang="ts">
import { ref } from 'vue';
// Version Composition API: setup

// Properties
const counter = ref(0);

// Methods
const increase = () => {
  counter.value++;
}

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
