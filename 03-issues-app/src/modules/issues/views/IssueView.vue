<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoaderSpinner from '@modules/shared/components/LoaderSpinner.vue';
import IssueCard from '@modules/issues/components/issue-list/IssueCard.vue';
import useIssue from '../composables/useIssue';

const route = useRoute();
const { id } = route.params;

const { issueQuery } = useIssue(Number(id))

</script>

<template>
  <RouterLink class="text-white" to="/">Go Back</RouterLink>
  <!-- Header -->
  <LoaderSpinner v-if="issueQuery.isLoading.value" color="white" :thickness="1" size="1.5rem" :show-text="false" />
  <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
  <p v-else>Issue with ID {{ id }} not found</p>
  <!-- Comments -->
  <LoaderSpinner :thickness="1" size="1.5rem" :show-text="false" />
  <div class="column">
    <span class="text-h3 q-mb-md">Comments (5)</span>
    <!-- <IssueCard v-for="comment of 5" :key="comment" /> -->
  </div>
</template>

<style scoped></style>
