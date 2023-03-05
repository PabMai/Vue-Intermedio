import { ref } from 'vue';
import rickandmortyApi from '@/api/rickandmortyApi';
import type { CharacterData, CharacterResult } from '@/modules/characters/interfaces/character';

export const useCharacters = () => {
  const characters = ref<CharacterResult[]>([]);
  const isLoading = ref<boolean>(true);

  rickandmortyApi.get<CharacterData[]>('/character').then((resp) => {
    //characters.value
    characters.value = resp.data.results;
    isLoading.value = false;
  });

  return {
    // Properties
    characters,
    isLoading
  };
};
