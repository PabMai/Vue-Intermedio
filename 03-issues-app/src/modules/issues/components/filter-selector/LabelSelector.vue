<script setup lang="ts">
import LoaderSpinner from '@modules/shared/components/LoaderSpinner.vue';
import useLabels from '@modules/issues/composables/useLabels';
import { Label } from '../../interfaces/label';

const { labelsQuery } = useLabels();
console.log(labelsQuery.data)

const data = labelsQuery.data;

</script>

<template>
  <LoaderSpinner size="50px" :thickness="1" :show-text="false" v-if="!labelsQuery.isLoading" />
  <q-chip v-for="label of data" :key="label.id" color="primary" outline clickable>{{ label.name
  }}</q-chip>
</template>

<style scoped></style>
