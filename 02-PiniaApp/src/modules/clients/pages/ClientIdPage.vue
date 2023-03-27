<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch } from 'vue';

import LoadingModal from '@/modules/shared/components/LoadingModal.vue';
import useClient from '@/modules/clients/composables/useClient';

const route = useRoute();

const { client, isLoading } = useClient(Number(route.params.id))

watch(
	() => client,
	() => {
		client
	},
	{ immediate: true }
);

</script>

<template>
	<div>
		<h3>Guardando...</h3>
		<h3>Guardado</h3>

		<LoadingModal v-if="isLoading" />

		<div>
			<h1>Nombre</h1>
			<form>
				<input type="text" placeholder="Nombre del cliente">
				<br>
				<input type="text" placeholder="Dirección">
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
