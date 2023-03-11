import { ref, computed } from 'vue';
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

	try {
		const { data } = await rickandmortyApi.get<CharacterResult>(`/character/${id}`);

		if (data) {
			return data;
		}

		throw new Error(`No se encontró un personaje con id: ${id}`);
	} catch (error: any) {
		throw new Error(error);
	}
};

const loadedCharacter = (character: CharacterResult) => {
	isError.value = false;
	errorMessage.value = null;
	characterSet.value[character.id] = character;
};

const loadedWithError = (error: string) => {
	isError.value = true;
	errorMessage.value = error;
};

const useCharacter = (id: string) => {
	const { isLoading } = useQuery(['character', id], () => getCharacter(id), {
		onSuccess: loadedCharacter,
		onError: loadedWithError
	});

	return {
		// Properties
		errorMessage,
		isError,
		isLoading,
		list: characterSet,

		// Getters
		character: computed<CharacterResult | null>(() => characterSet.value[id])

		// Methods
	};
};

export default useCharacter;
