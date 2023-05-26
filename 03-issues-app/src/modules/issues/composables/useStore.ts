import useIssuesStore from '@stores/issues';
import { storeToRefs } from 'pinia';

const useStore = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = storeToRefs(issuesStore);

  return {
    // Reactive Properties
    labels,
    state,
  }
}

export default useStore;
