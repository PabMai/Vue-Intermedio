import type { CharacterResult } from '@/modules/characters/interfaces/character';

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
