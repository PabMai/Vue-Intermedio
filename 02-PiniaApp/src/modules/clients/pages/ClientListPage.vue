<script setup lang="ts">
import ClientList from '@/modules/clients/components/ClientList.vue';
import PaginationNumber from '@/modules/clients/components/PaginationNumber.vue';
import useClients from '@/modules/clients/composables/useClients';
import LoadingModal from '@/modules/shared/components/LoadingModal.vue';

const { isLoading } = useClients()

</script>

<template>
  <div>
    <h1>Listado de clientes</h1>
    <!-- Client List -->
    <ClientList />
    <!-- Pagination -->
    <PaginationNumber />
    <!-- Loading Modal -->
    <LoadingModal v-if="isLoading" />
  </div>
</template>

<style scoped></style>
