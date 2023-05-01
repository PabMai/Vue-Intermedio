<script setup lang="ts">
import { useRoute } from 'vue-router';
import LoaderSpinner from '@modules/shared/components/LoaderSpinner.vue';
import IssueCard from '@modules/issues/components/issue-list/IssueCard.vue';
import useIssue from '../composables/useIssue';
import { Issue } from '../interfaces/issue';

const route = useRoute();
const { id } = route.params;

const { issueQuery, issueCommentsQuery } = useIssue(Number(id))

</script>

<template>
  <RouterLink class="text-white" to="/">Go Back</RouterLink>
  <!-- Header -->
  <LoaderSpinner v-if="issueQuery.isLoading.value" color="white" :thickness="1" size="1.5rem" :show-text="false" />
  <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
  <p v-else>Issue with ID {{ id }} not found</p>
  <!-- Comments -->
  <LoaderSpinner v-if="issueCommentsQuery.isLoading.value" :thickness="1" size="1.5rem" :show-text="false" />
  <div class="column" v-else-if="issueCommentsQuery.data.value">
    <span class="text-h3 q-mb-md">Comments ({{ issueCommentsQuery.data.value.length }})</span>
    <IssueCard v-for="comment of issueCommentsQuery.data.value" :key="comment.id" :issue="comment" />
  </div>
</template>

<style scoped></style>
