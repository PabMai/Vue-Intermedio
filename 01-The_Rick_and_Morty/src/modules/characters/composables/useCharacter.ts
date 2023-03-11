import { ref } from 'vue';
import type { CharacterResult } from '@/modules/characters/interfaces/character';
import rickandmortyApi from '@/api/rickandmortyApi';
import { useQuery } from '@tanstack/vue-query';

const characterSet = ref<{ [id: string]: CharacterResult }>({});
const isError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getCharacter = async (id: string): Promise<CharacterResult> => {
	if (characterSet.value[id]) {
		return characterSet.value[id];
	}

	const { data } = await rickandmortyApi.get<CharacterResult>(`/character/${characterId}`);

	// ! TODO: manejar error
	return data;
};

const loadedCharacter = (character: CharacterResult) => {
	isError.value = false;
	errorMessage.value = null;
	characterSet.value[character.id] = character;
};

const useCharacter = (id: string) => {
	const { isLoading } = useQuery(['character', id], () => getCharacter(id), {
		onSuccess: loadedCharacter
		// TODO: Manejar error
	});

	return {
		// Properties
		errorMessage,
		isError,
		isLoading,
		list: characterSet

		// Getters

		// Methods
	};
};

export default useCharacter;
