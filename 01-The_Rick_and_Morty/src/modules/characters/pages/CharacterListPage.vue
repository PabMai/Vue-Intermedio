<script setup lang="ts">

import CardList from '@/modules/characters/components/CardList.vue';
import useCharacters from '@/modules/characters/composables/useCharacters';

const props = defineProps<{ title: string, visible: boolean }>();

const { characters, errorMessage, isError, isLoading, count } = useCharacters();

</script>

<template>
    <div>
        <h1 v-if="isLoading">Loading...</h1>
        <div v-if="isError">
            <h1>Error al cargar</h1>
            <p>{{ errorMessage }}</p>
        </div>
        <template v-else>
            <h2>{{ props.title }} - ({{ count }})</h2>

            <CardList :characters="characters" />
        </template>

    </div>
</template>

<style scoped></style>