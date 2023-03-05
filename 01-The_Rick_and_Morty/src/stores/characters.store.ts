import type { CharacterResult } from '@/modules/characters/interfaces/character';
import { reactive } from 'vue';

interface StoreCharacters {
  // Properties
  characters: {
    list: CharacterResult[];
    count: number;
    isLoading: boolean;
    isError: boolean;
    errorMennsage: string | null;
  };

  // Methods
  startLoadingCharacters: () => void;
  loadedCharacters: (data: CharacterResult[]) => void;
  loadCharactersFailed: (error: string) => void;
}

// Initial state
const characterStore = reactive<StoreCharacters>({
  characters: {
    list: [],
    count: 0,
    isLoading: true,
    isError: false,
    errorMennsage: null
  },

  // Methods
  startLoadingCharacters: () => {},
  loadedCharacters: (data: CharacterResult[]) => {},
  loadCharactersFailed: (error: string) => {}
});

export default characterStore;
