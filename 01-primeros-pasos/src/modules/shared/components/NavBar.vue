<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { LinkRoutes } from '@/router/link-routes';

// const props = defineProps({
//     title: {
//         type: String,
//         required: true
//     }
// });

// Mediante generico
//const props = defineProps<{ title: string }>();

// Usando interface
interface Props {
    title?: string;
    links?: LinkRoutes[],
    showIcon?: boolean
}

// const props = defineProps<Props>();

const props = withDefaults(defineProps<Props>(), {
    showIcon: true,
    links: () => [],
});

</script>

<template>
    <nav>
        <img v-if="props.showIcon" src="@/assets/logo.svg" alt="logo" height="25" width="25">
        <span v-if="props.title">{{ props.title }}</span>

        <RouterLink v-for="link of links" :key="link.name" :to="link.path">{{ link.title }}</RouterLink>

        <!-- <RouterLink to="/">Inicio</RouterLink> -->
        <!-- <RouterLink to="/about">Sobre</RouterLink> -->
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: center;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
    margin-right: 5px;
}

.router-link-active {
    color: grey !important;
    text-decoration: underline;
}

.router-link-exact-active {
    text-decoration: none;
}
</style>