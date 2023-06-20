<script setup lang="ts">
import LoaderSpinner from '@modules/shared/components/LoaderSpinner.vue';
import FilterSelector from '@modules/issues/components/filter-selector/FilterSelector.vue';
import IssueList from '@modules/issues/components/issue-list/IssueList.vue';
import useIssues from '../composables/useIssues';
import FloatingButtons from '../components/FloatingButtons.vue';

const { issuesQuery } = useIssues();

const listPageClickTemp1 = () => {
  console.log('listPageClickTemp1');
}

const listPageClickTemp2 = () => {
  console.log('listPageClickTemp2');
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
      icon: 'navigation',
      color: 'secondary',
      size: 'md',
      action: listPageClickTemp2
    },
    {
      icon: 'add',
      color: 'primary',
      size: 'md',
      action: listPageClickTemp1
    },
  ]" />
</template>

<style scoped></style>
