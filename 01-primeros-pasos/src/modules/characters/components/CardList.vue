<script setup lang="ts">
import { useCharacters } from '../composables/useCharacters';

const { characters, isLoading, hasError, errorMessage } = useCharacters();

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-if="hasError">{{ errorMessage }}</h1>
    <ul>
        <li v-for="character of characters" :key="character.id">{{ character.name }}</li>
    </ul>
</template>

<style scoped></style>