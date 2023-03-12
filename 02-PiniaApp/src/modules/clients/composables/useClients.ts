import type { Client } from '@/modules/clients/interfaces/client';
import { clientsApi } from '@/api/clientsApi';
import { useQuery } from '@tanstack/vue-query';

const getClients = async(): Promise<Client[]> => {
 
    const {data} = await clientsApi.get<Client[]>('/clients?_page=1');

    return data;
    
}

const useClients = () => {

    const {isLoading, data} = useQuery(
        ['clients?page=',1],
        () => getClients(),
    )

    return {
        isLoading
    }
    
}

export default useClients;