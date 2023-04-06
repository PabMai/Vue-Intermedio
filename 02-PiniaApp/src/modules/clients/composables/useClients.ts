import { useQuery } from '@tanstack/vue-query';
import type { Client } from '@/modules/clients/interfaces/client';
import { clientsApi } from '@/api/clientsApi';
import { useClientsStore } from '@/store/clients';
import { storeToRefs } from 'pinia';
import { watch, computed } from 'vue';

const getClients = async (page: number): Promise<Client[]> => {

//   await new Promise( resolve => {
//     setTimeout( () => resolve(true), 500 );
//   });

  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);

  return data;
};

const useClients = () => {
  const clientsStore = useClientsStore();
  const { clients, currentPage, totalPages } = storeToRefs(clientsStore);

  const { isLoading, data } = useQuery(
    ['clients?page=', currentPage], 
    () => getClients(currentPage.value)
  );

  watch(data, (clients) => {
    if (clients) {
      clientsStore.setClients(clients);
    }
  }, { immediate: true });

  return {
    // Propierties
    isLoading,
    clients,
    currentPage,
    totalPages,

    // Methods
    changePage(page: number) {
      clientsStore.setPage(page);
    },

    // Getters
    // totalPageNumber: computed(() =>
    //   [...new Array(totalPages.value)].map((value, index) => index + 1)
    // )
  };
};

export default useClients;
