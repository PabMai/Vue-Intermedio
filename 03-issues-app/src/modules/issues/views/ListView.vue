<script setup lang="ts">
import { ref } from 'vue';

import LoaderSpinner from '@modules/shared/components/LoaderSpinner.vue';
import FilterSelector from '@modules/issues/components/filter-selector/FilterSelector.vue';
import IssueList from '@modules/issues/components/issue-list/IssueList.vue';
import FloatingButtons from '../components/FloatingButtons.vue';
import NewIssueDialog from '@src/components/NewIssueDialog.vue';

import useIssues from '../composables/useIssues';
import useLabels from '@modules/issues/composables/useLabels';

const { issuesQuery } = useIssues();
const { labelsQuery } = useLabels();

const isOpen = ref<boolean>(false);

const openDialog = () => {
  isOpen.value = true;
}

</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">Github Issues</span>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-md-4">
      <!-- FilterSelector -->
      <FilterSelector />
    </div>
    <div class="col-xs-12 col-md-8">
      <LoaderSpinner v-if="issuesQuery.isLoading.value" color="white" />
      <IssueList v-else :issues="issuesQuery.data?.value || []" />
    </div>
  </div>

  <!-- FloatingButtons -->
  <FloatingButtons :buttons="[
    {
      icon: 'add',
      color: 'primary',
      size: 'md',
      action: openDialog,
    },
  ]" />

  <!-- Dialog de new Issue -->
  <NewIssueDialog
    v-if="labelsQuery.dat"
    :is-open="isOpen"
    :labels="labelsQuery.data.value?.map(label => label.name) || []"
    @on-close="isOpen = false"
  />
</template>

<style scoped></style>
