<script setup lang="ts">
import ClientList from '@/modules/clients/components/ClientList.vue';
import PaginationNumber from '@/modules/clients/components/PaginationNumber.vue';

</script>

<template>
  <div>
    <h1>Listado de clientes</h1>
    <!-- Client List -->
    <ClientList />
    <!-- Pagination -->
    <PaginationNumber />
    <!-- Loading Modal -->
  </div>
</template>

<style scoped></style>
