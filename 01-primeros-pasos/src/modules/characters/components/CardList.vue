<script setup lang="ts">
import jikanApi from '@/api/jikanApi';

jikanApi.get('/characters')
    .then(resp => {
        console.log(resp)
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