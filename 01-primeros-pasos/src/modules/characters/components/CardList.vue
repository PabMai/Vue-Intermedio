<script setup lang="ts">
import { ref } from 'vue';
import rickandmortyApi from '@/api/rickandmortyApi.js';
import type { CharacterData, CharacterResult } from '@/modules/characters/interfaces/character';

// const { data: chacartetsData } = await rickandmortyApi.get<CharacterData[]>('/character');
// const characters: CharacterResult = chacartetsData.results;

const characters = ref<CharacterResult[]>([]);

rickandmortyApi.get<CharacterData[]>('/character')
    .then(resp => {
        //characters.value
        characters.value = resp.data.results;
    })

</script>

<template>
    <ul>
        <li v-for="character of characters" :key="character.id">{{ character.name }}</li>
    </ul>
</template>

<style scoped></style>