import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useIssuesStore = defineStore('issues', () => {

  const state = ref(''); // all = '', open, closed
  const labels = ref<string[]>([]);

  return {
    state,
    labels,

    // Getters

    // Actions
    toggleLabel(labelName: string) {
      // TODO: implementar
      throw new Error('No implementado');
    }
  }
});

export default useIssuesStore;
