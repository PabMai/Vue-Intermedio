<script setup lang="ts">

import rickandmortyApi from '@/api/rickandmortyApi';
import CardList from '@/modules/characters/components/CardList.vue';
import { useQuery } from '@tanstack/vue-query';

const props = defineProps<{ title: string, visible: boolean }>();

const getAllCharacters = async () => {
    const { data: chacartetsData } = await rickandmortyApi.get<CharacterData[]>('/character');

    return chacartetsData.results;
}

const { isLoading, isError, data: characters, error } = useQuery(
    ['characters'],
    getAllCharacters,
);

</script>

<template>
    <div>
        <h1 v-if="isLoading">Loading...</h1>
        <h1 v-if="isError">{{ error }}</h1>
        <template v-else>
            <h2>{{ props.title }}</h2>

            <CardList :characters="characters" />
        </template>

    </div>
</template>

<style scoped></style>