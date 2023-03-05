<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { useCharacters } from '../composables/useCharacters';
import type { CharacterResult, CharacterData } from '../interfaces/character';
import rickandmortyApi from '@/api/rickandmortyApi';
import CharacterCard from '@/modules/characters/components/CharacterCard.vue';

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
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect: 'always'
    }
);

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-if="isError">{{ error }}</h1>
    <div class="card-list">
        <CharacterCard v-for="character of characters" :key="character.id" :character="character" />
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>