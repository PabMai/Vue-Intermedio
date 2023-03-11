<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';

const counterOptions = useCounterOptionsStore();
const {count, squareCount} = storeToRefs(counterOptions);

</script>

<template>
    <h1>Pinia Options</h1>
    <h3>Counter: {{ count }}</h3>
    <h3>Square: {{ squareCount }}</h3>
</template>

<style scoped>

</style>