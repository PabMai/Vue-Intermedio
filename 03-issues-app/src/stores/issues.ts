import { ref } from 'vue';
import { defineStore } from 'pinia';
import { State } from '@modules/issues/interfaces/issue';

const useIssuesStore = defineStore('issues', () => {

  const state = ref<State>(State.All); // all = '', open, closed
  const labels = ref<string[]>([]);

  return {
    state,
    labels,

    // Getters

    // Actions
    toggleLabel(labelName: string) {
      if ( labels.value.includes( labelName )) {
        labels.value = labels.value.filter( label => label !== labelName );
        return;
      }

      labels.value.push(labelName);
    }
  }
});

export default useIssuesStore;
