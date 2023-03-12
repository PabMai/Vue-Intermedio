<script setup lang="ts">
import { RouterLink } from 'vue-router';

console.log(import.meta.env)

</script>

<template>
    <ul>
        <li>
            <RouterLink :to="{ name: 'client-id', params: { id: 1 } }">
                Client Name
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped></style>