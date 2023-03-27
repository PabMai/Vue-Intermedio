import { ref, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import type { Client } from '@/modules/clients/interfaces/client';
import { clientsApi } from '@/api/clientsApi';

const getClient = async (id: number): Promise<Client> => {
	// await new Promise((resolve) => {
	// 	setTimeout(() => resolve(true), 500);
	// });

	const { data } = await clientsApi.get<Client>(`/clients/${id}`);
	console.log(data);

	return data;
};

const useClient = (id: number) => {
	const client = ref<Client>();

	const { isLoading, data } = useQuery(['client', id], async () => getClient(id));

	console.log(data.value);

	watch(
		() => data.value,
		() => {
			if (data.value) {
				client.value = data.value;
			}
		},
		{ immediate: true }
	);

	return {
		isLoading,
		client
	};
};

export default useClient;