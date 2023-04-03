<script setup lang="ts">
import { useRoute } from 'vue-router';

import LoadingModal from '@/modules/shared/components/LoadingModal.vue';
import useClient from '@/modules/clients/composables/useClient';
import { useMutation } from '@tanstack/vue-query';
import type { Client } from '@/modules/clients/interfaces/client';
import { clientsApi } from '@/api/clientsApi';

const route = useRoute();

const { client, isLoading } = useClient(Number(route.params.id))

const updateClient = async( client: Client ):Promise<Client> => {
	const { data } = await clientsApi.patch<Client>(`/clients/${ client.id }`, client);

	return data;
}

const clientMutation = useMutation( updateClient );

</script>

<template>
	<div>
		<h3>Guardando...</h3>
		<h3>Guardado</h3>

		<LoadingModal v-if="isLoading" />

		<div v-if="client">
			<h1>{{ client.name }}</h1>
			<form @submit.prevent="clientMutation.mutate(client!)">
				<input type="text" placeholder="Nombre del cliente" v-model="client.name">
				<br>
				<input type="text" placeholder="Dirección" v-model="client.address">
				<br>
				<button type="submit">Guardar</button>
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
