<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';
import CounterOptionsValue from '@/modules/counter/components/CounterOptionsValue.vue';

const counterOptions = useCounterOptionsStore();
const {count, squareCount} = storeToRefs(counterOptions);
const { increment, incrementBy } = counterOptions;

</script>

<template>
    <h1>Pinia Options</h1>
    <h3>Counter: {{ count }}</h3>
    <h3>Square: {{ squareCount }}</h3>

    <br>

    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterOptions.$reset">Reset</button>

    <br>
    <CounterOptionsValue />
</template>

<style scoped>
button {
    margin-right: 5px;
}
</style>