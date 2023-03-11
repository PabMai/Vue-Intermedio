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
	ids: {
		list: {
			[id: number]: CharacterResult;
		};
		isLoading: boolean;
		isError: boolean;
		errorMessage: string | null;
	};

	// Methods of character
	startLoadingCharacters: () => void;
	loadedCharacters: (data: CharacterResult[]) => void;
	loadCharactersFailed: (error: string) => void;

	// Methods of character by id
	startLoadingCharacter: (id: number) => void;
	checkIdStore: (id: number) => boolean;
	loadedCharacter: (character: CharacterResult) => void;
	loadCharacterFailed: (error: string) => void;
}

// Initial state
const characterStore: StoreCharacters = reactive<StoreCharacters>({
	characters: {
		list: [],
		count: 0,
		isLoading: true,
		isError: false,
		errorMessage: null
	},

	ids: {
		list: {},
		isLoading: true,
		isError: false,
		errorMessage: null
	},

	// Methods of characters
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
	},

	// Methods of character by id
	startLoadingCharacter: (id: number) => {
		characterStore.ids = {
			...characterStore.ids,
			isLoading: true,
			isError: false,
			errorMessage: null
		};
	},
	checkIdStore: (id: number) => {
		return !!characterStore.ids.list[id];
	},
	loadedCharacter: (character: CharacterResult) => {
		characterStore.ids.isLoading = false;
		characterStore.ids.list[character.id] = character;
	},
	loadCharacterFailed: (error: string) => {}
});

characterStore.startLoadingCharacters();

export default characterStore;
