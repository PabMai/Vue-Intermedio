<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoaderSpinner from '@modules/shared/components/LoaderSpinner.vue';
import IssueCard from '@modules/issues/components/issue-list/IssueCard.vue';

const route = useRoute();
const { id } = route.params;

</script>

<template>
  <LoaderSpinner color="white" />
  <RouterLink class="text-white" to="/">Go Back</RouterLink>
  <!-- Header -->
  <IssueCard />
  <!-- Comments -->
  <LoaderSpinner :thickness="1" size="1.5rem" :show-text="false" />
  <div class="column">
    <span class="text-h3 q-mb-md">Comments (5)</span>
    <IssueCard v-for="comment of 5" :key="comment" />
  </div>
</template>

<style scoped></style>
