<script setup lang="ts">

import characterStore from '@/stores/characters.store';
import rickandmortyApi from '@/api/rickandmortyApi';
import CardList from '@/modules/characters/components/CardList.vue';
import { useQuery } from '@tanstack/vue-query';

const props = defineProps<{ title: string, visible: boolean }>();

const getAllCharactersCache = async () => {

    if (characterStore.characters.count > 0) {
        return characterStore.characters.list;
    }

    const { data } = await rickandmortyApi.get<CharacterData[]>('/character');

    characterStore.loadedCharacters(data.results)

    return data.results;
}

useQuery(
    ['characters'],
    getAllCharactersCache,
    {
        onSuccess(data) {
            characterStore.loadedCharacters(data);
        },
        onError(error: any) {
            characterStore.loadCharactersFailed(error.message)
        }
    }
);

</script>

<template>
    <div>
        <h1 v-if="characterStore.characters.isLoading">Loading...</h1>
        <div v-if="characterStore.characters.isError">
            <h1>Error al cargar</h1>
            <p>{{ characterStore.characters.errorMessage }}</p>
        </div>
        <template v-else>
            <h2>{{ props.title }}</h2>

            <CardList :characters="characterStore.characters.list" />
        </template>

    </div>
</template>

<style scoped></style>