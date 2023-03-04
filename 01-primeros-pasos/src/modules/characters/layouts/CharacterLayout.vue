<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/modules/shared/components/NavBar.vue';

</script>

<template>
    <div>
        <h1>Personajes</h1>

        <!-- Navbar -->
        <NavBar :show-icon="false" />
        <!-- RouterView + Suspense -->
        <RouterView />

    </div>
</template>

<style scoped></style>