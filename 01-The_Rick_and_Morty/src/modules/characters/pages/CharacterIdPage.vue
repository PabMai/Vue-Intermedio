<script setup lang="ts">
import { watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useCharacter from '@/modules/characters/composables/useCharacter';

const route = useRoute();
const router = useRouter();

const { id } = route.params as { id: string };

const { character, isLoading, isError, errorMessage } = useCharacter(id);

watchEffect(() => {
    if (!isLoading.value && isError.value) {
        router.replace('/characters');
    }
    // console.log({
    //     isLoading: isLoading.value,
    //     isError: isError.value
    // })
})

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-else-if="isError">{{ errorMessage }}</h1>

    <div v-else-if="character">
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