import { ref } from 'vue';

import type { CharacterResult } from '@/modules/characters/interfaces/character';

const characters = ref<CharacterResult[]>([]);
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const useCharacters = () => {
	return {
		// Properties
		characters,
		errorMessage,
		isError,
		isLoading

		// Getters

		// Methods
	};
};

export default useCharacters;
