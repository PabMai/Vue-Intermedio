<script setup lang="ts">
import { toRef } from 'vue';
import type { CharacterResult } from '@/modules/characters/interfaces/character';

// interface Props {
//     character: CharacterResult
// }

const props = defineProps<{ character: CharacterResult }>();
const character = toRef(props, 'character');

</script>

<template>
    <!-- <pre>{{ JSON.stringify(character) }}</pre> -->

    <div class="character-card">
        <img v-if="!character.image"
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" alt="No image">
        <img :src="character.image" :alt="character.name">
        <h3>{{ character.name }}</h3>
    </div>
</template>

<style scoped>
.character-card {
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 150px;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
}
</style>