import { ref, watch, computed } from 'vue';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';

import type { Client } from '@/modules/clients/interfaces/client';
import { clientsApi } from '@/api/clientsApi';

const getClient = async (id: number): Promise<Client> => {
	// await new Promise((resolve) => {
	// 	setTimeout(() => resolve(true), 500);
	// });

	const { data } = await clientsApi.get<Client>(`/clients/${id}`);

	return data;
};

const useClient = (id: number) => {
	const client = ref<Client>();

	const { isLoading, data, isError } = useQuery(
		['client', id],
		async () => getClient(id),
		{
			retry: false			
		}
	);

	watch(
		() => data.value,
		() => {
			if (data.value) {
				client.value = { ...data.value };
			}
		},
		{ immediate: true }
	);

	const queryClient = useQueryClient();

	const updateClient = async( client: Client ):Promise<Client> => {
		const { data } = await clientsApi.patch<Client>(`/clients/${ client.id }`, client);
		const queries = queryClient.getQueryCache().findAll(['clients?page='], { exact: false })
		// Elimina el cache según la variable queries
		//queries.forEach( query => query.reset());
		// Vuelve a realizar la llamada a la API
		queries.forEach( query => query.fetch());
	
		return data;
	}
	
	const clientMutation = useMutation( updateClient );

	return {
		isLoading,
		client, 
		isError,		
		clientMutation,

		// Methods
		updateClient: clientMutation.mutate,
		isUpdating: computed(() => clientMutation.isLoading.value),
		isUpdatingSuccess: computed(() => clientMutation.isSuccess.value),
		isErrorUpdating: computed(() => clientMutation.isError.value),

	};
};

export default useClient;
