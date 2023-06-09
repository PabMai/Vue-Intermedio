import { reactive } from 'vue';
import rickandmortyApi from '@/api/rickandmortyApi';
import type { CharacterResult } from '@/modules/characters/interfaces/character';

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
	startLoadingCharacters: async () => {
		const { data } = await rickandmortyApi.get<CharacterData[]>('/character');
		characterStore.loadedCharacters(data.results);
	},
	loadedCharacters: (data: CharacterResult[]) => {
		console.log(data);

		if (data.length === 0) {
			return characterStore.loadCharactersFailed(
				'La respuesta no es un arreglo de personajes'
			);
		}

		characterStore.characters = {
			count: data.length,
			errorMessage: null,
			isError: false,
			isLoading: false,
			list: data
		};
	},
	loadCharactersFailed: (error: string) => {
		characterStore.characters = {
			list: [],
			count: 0,
			isLoading: false,
			isError: true,
			errorMessage: error
		};
	}
});

characterStore.startLoadingCharacters();

export default characterStore;
