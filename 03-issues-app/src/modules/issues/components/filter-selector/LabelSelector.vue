<script setup lang="ts">
import LoaderSpinner from '@modules/shared/components/LoaderSpinner.vue';

</script>

<template>
  <LoaderSpinner size="50px" :thickness="1" :show-text="false" />
  <q-chip v-for="label of 10" :key="label" color="primary" outline clickable>Nombre</q-chip>
</template>

<style scoped></style>
