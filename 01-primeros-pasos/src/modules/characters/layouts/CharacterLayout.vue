<script setup lang="ts">

import { RouterView } from 'vue-router';
import NavBar from '@/modules/shared/components/NavBar.vue';
import type { LinkRoutes } from '@/router/link-routes';
import charactersRoute from '../router/index';

const linkRoutes: LinkRoutes[] = charactersRoute.children!
    .filter(route => (route.props as { visible: boolean }).visible)
    .map(
        route => {
            return {
                name: route.name as string,
                path: route.path,
                title: (route.props as { title: string, visible: boolean }).title
            }
        }
    )

</script>

<template>
    <div>
        <h1>Personajes</h1>

        <!-- Navbar -->
        <NavBar :show-icon="false" :links="linkRoutes" />
        <!-- RouterView + Suspense -->
        <RouterView />

    </div>
</template>

<style scoped></style>