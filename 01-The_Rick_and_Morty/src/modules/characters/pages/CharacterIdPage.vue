<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';

import type { CharacterResult } from '@/modules/characters/interfaces/character';
import characterStore from '@/stores/characters.store';
import rickandmortyApi from '@/api/rickandmortyApi';

const route = useRoute();

const { id } = route.params as { id: string };

const getCharacterCache = async (characterId: string): Promise<CharacterResult> => {
    if (characterStore.checkIdStore(characterId)) {
        return characterStore.ids.list[characterId];
    }

    const { data } = await rickandmortyApi.get<CharacterResult>(`/character/${characterId}`);

    return data;
}

const { data: character } = useQuery(
    ['character', id],
    () => getCharacterCache(id),
    {
        onSuccess(character) {
            characterStore.loadedCharacter(character);
        },
    }
);

</script>

<template>
    <h1 v-if="!character">Loading...</h1>
    <div v-else>
        <h1>{{ character.name }}</h1>
        <div class="character-container">
            <img :src="character.image" :alt="character.name">
            <ul>
                <li>Gender: {{ character.gender }}</li>
                <li>Species: {{ character.species }}</li>
                <li>Status: {{ character.status }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.character-container {
    display: flex;
    flex-direction: row;
}

img {
    width: 150px;
    border-radius: 5px;
}
</style>