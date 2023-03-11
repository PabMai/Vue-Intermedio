<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '@/store/counter-setup';
import CounterSetupValue from '@/modules/counter/components/CounterSetupValue.vue';

const counterOptions = useCounterSetupStore();
const {count, squareCount} = storeToRefs(counterOptions);
const { increment, incrementBy } = counterOptions;

</script>

<template>
    <h1>Pinia Setup</h1>
    <h3>Counter: {{ count }}</h3>
    <h3>Square: {{ squareCount }}</h3>

    <br>

    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterOptions.$reset">Reset</button>

    <br>
    <CounterSetupValue />
</template>

<style scoped>
button {
    margin-right: 5px;
}
</style>