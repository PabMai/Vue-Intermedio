import { useQuery } from '@tanstack/vue-query';
import type { Client } from '@/modules/clients/interfaces/client';
import { clientsApi } from '@/api/clientsApi';
import { useClientsStore } from '@/store/clients';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const getClients = async(): Promise<Client[]> => {
 
    const {data} = await clientsApi.get<Client[]>('/clients?_page=1');

    return data;    
}

const useClients = () => {

    const clientsStore = useClientsStore();
    const { clients, currentPage, totalPages } = storeToRefs(clientsStore);

    const {isLoading, data} = useQuery(
        ['clients?page=',1],
        () => getClients(),        
    )

    watch(data, clients => {
        if (clients) {
            clientsStore.setClients(clients);
        }
    })

    return {
        // Propierties
        isLoading,
        clients,
        currentPage,
        totalPages
    }
    
}

export default useClients;