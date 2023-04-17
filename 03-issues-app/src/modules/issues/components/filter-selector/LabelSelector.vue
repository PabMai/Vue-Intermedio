<script setup lang="ts">
import LoaderSpinner from '@modules/shared/components/LoaderSpinner.vue'
import useLabels from '@modules/issues/composables/useLabels'

const { labelsQuery } = useLabels()

</script>

<template>
	<div class="q-mt-md">
		<LoaderSpinner
			size="50px"
			:thickness="1"
			:show-text="false"
			v-if="labelsQuery.isLoading.value"
		/>
		<q-chip
			v-else
			v-for="label of labelsQuery.data.value"
			:key="label.id"
			color="primary"
			outline
			clickable
			>{{ label.name }}</q-chip
		>
	</div>
</template>

<style scoped></style>
