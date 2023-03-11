import { ref } from 'vue';

import type { CharacterResult } from '@/modules/characters/interfaces/character';
import characterStore from '@/stores/characters.store';
import rickandmortyApi from '@/api/rickandmortyApi';
import { useQuery } from '@tanstack/vue-query';

const characters = ref<CharacterResult[]>([]);
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getAllCharacters = async () => {
	if (characters.value.length > 0) {
		return characters.value;
	}

	const { data } = await rickandmortyApi.get<CharacterData[]>('/character');

	characterStore.loadedCharacters(data.results);

	return data.results;
};

const loadedCharacters = (data: CharacterResult[]) => {
	isError.value = false;
	errorMessage.value = null;
	characters.value = data;
};

const useCharacters = () => {
	useQuery(['characters'], getAllCharacters, {
		// onSuccess(data) {
		// 	loadedCharacters(data);
		// }
		// Es igual a:
		onSuccess: loadedCharacters
	});

	return {
		// Properties
		characters,
		errorMessage,
		isError,
		isLoading,

		// Getters
		count: characters.value.length

		// Methods
	};
};

export default useCharacters;
