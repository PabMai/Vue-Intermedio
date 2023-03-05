import { onMounted, ref } from 'vue';
import rickandmortyApi from '@/api/rickandmortyApi';
import type { CharacterData, CharacterResult } from '@/modules/characters/interfaces/character';

const characters = ref<CharacterResult[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>('');

export const useCharacters = () => {
  // Lifecycle Hooks
  onMounted(async () => {
    await loadCharacters();
  });
  // Methods
  const loadCharacters = async () => {
    if (characters.value.length > 0) return;

    try {
      const data = await rickandmortyApi
        .get<CharacterData[]>('/character')
        .then((resp) => resp.data.results);

      characters.value = data;
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      errorMessage.value = JSON.stringify(error);
    }
  };

  if (characters.value.length === 0) {
    rickandmortyApi.get<CharacterData[]>('/character').then((resp) => {
      characters.value = resp.data.results;
      isLoading.value = false;
    });
  }

  return {
    // Properties
    characters,
    isLoading,
    hasError,
    errorMessage
  };
};
