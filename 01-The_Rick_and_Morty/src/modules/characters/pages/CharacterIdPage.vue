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

const { data } = useQuery(
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
    <div>
        <h1>Character #{{ route.params.id }}</h1>
        <code>{{ data }}</code>
    </div>
</template>

<style scoped></style>