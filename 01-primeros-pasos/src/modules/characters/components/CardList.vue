<script setup lang="ts">
import jikanApi from '@/api/jikanApi';
import type { Character } from '@/modules/characters/interfaces/character';

jikanApi.get<Character[]>('/characters')
    .then(resp => {
        console.log(resp.data)
    })

</script>

<template>
    <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
    </ul>
</template>

<style scoped></style>