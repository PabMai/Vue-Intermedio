import type { CharacterResult } from '@/modules/characters/interfaces/character';
import { reactive } from 'vue';

interface StoreCharacters {
	// Properties
	characters: {
		list: CharacterResult[];
		count: number;
		isLoading: boolean;
		isError: boolean;
		errorMessage: string | null;
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
		errorMessage: null
	},

	// Methods
	startLoadingCharacters: () => {},
	loadedCharacters: (data: CharacterResult[]) => {
		console.log(data);
		characterStore.characters = {
			count: data.length,
			errorMessage: null,
			isError: false,
			isLoading: false,
			list: data
		};
	},
	loadCharactersFailed: (error: string) => {}
});

export default characterStore;
