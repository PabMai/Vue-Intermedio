<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { useCharacters } from '../composables/useCharacters';
import type { CharacterResult, CharacterData } from '../interfaces/character';
import rickandmortyApi from '@/api/rickandmortyApi';

//! 1- Normal suspense
// const { data: chacartetsData } = await rickandmortyApi.get<CharacterData[]>('/character');
// const characters: CharacterResult = chacartetsData.results;

//! 2- Composable function
// const { characters, isLoading, hasError, errorMessage } = useCharacters();

//! 3- Tanstack Query
const getCharactersSlow = async (): Promise<CharacterResult[]> => {
    const { data: chacartetsData } = await rickandmortyApi.get<CharacterData[]>('/character');
    return chacartetsData.results;
}

const { isLoading, isError, data: characters, error } = useQuery(
    ['characters'],
    getCharactersSlow,
);

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-if="isError">{{ error }}</h1>
    <ul>
        <li v-for="character of characters" :key="character.id">{{ character.name }}</li>
    </ul>
</template>

<style scoped></style>