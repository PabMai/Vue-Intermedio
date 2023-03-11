<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const { id } = route.params as { id: string };

</script>

<template>
    <div>
        <h1>Character #{{ route.params.id }}</h1>
    </div>
</template>

<style scoped></style>