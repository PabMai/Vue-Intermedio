import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { githubApi } from '@src/api/githubApi';
import { Label } from '@modules/issues/interfaces/label';
import useIssuesStore from '../../../stores/issues';
// import { storeToRefs } from 'pinia'

const getLabels = async (): Promise<Label[]> => {

  const { data } = await githubApi<Label[]>('/labels?per_page=100');

  return data;
}

const useLabels = () => {

  const issuesStore = useIssuesStore();
  // const { labels } = storeToRefs(issuesStore)

  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      staleTime: 1000 * 60 * 60 // una hora
    }
  );

  return {
    labelsQuery,

    // Getters
    selectedLabels: computed(() => issuesStore.labels),
    //selectedLabels: labels,

    // Methods
    toggleLabel: issuesStore.toggleLabel
  }
}

export default useLabels;
