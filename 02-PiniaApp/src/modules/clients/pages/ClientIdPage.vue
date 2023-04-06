<script setup lang="ts">
import { useRoute } from 'vue-router';

import LoadingModal from '@/modules/shared/components/LoadingModal.vue';
import useClient from '@/modules/clients/composables/useClient';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import type { Client } from '@/modules/clients/interfaces/client';
import { clientsApi } from '@/api/clientsApi';
import { watch } from 'vue';

const route = useRoute();

const queryClient = useQueryClient();

const { client, isLoading } = useClient(Number(route.params.id))

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

watch( clientMutation.isSuccess, () => {
	setTimeout(() => {
		clientMutation.reset();
	}, 1000)
})

</script>

<template>
	<div>
		<h3 v-if="clientMutation.isLoading.value">Guardando...</h3>
		<h3 v-if="clientMutation.isSuccess.value">Guardado</h3>

		<LoadingModal v-if="isLoading" />

		<div v-if="client">
			<h1>{{ client.name }}</h1>
			<form @submit.prevent="clientMutation.mutate(client!)">
				<input type="text" placeholder="Nombre del cliente" v-model="client.name">
				<br>
				<input type="text" placeholder="Dirección" v-model="client.address">
				<br>
				<button type="submit" :disabled="clientMutation.isLoading.value">Guardar</button>
			</form>
		</div>

		<code>{{ client }}</code>

	</div>
</template>

<style scoped>
input {
	width: 100%;
	padding: 5px 10px;
	margin-bottom: 10px;
}

button {
	margin-bottom: 10px;
}
</style>
