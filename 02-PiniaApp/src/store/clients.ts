import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/modules/clients/interfaces/client';

export const useClientsStore = defineStore('clients-store', () => {
    
    // State
    const currentPage = ref<number>(1);
    const totalPages = ref<number>(5);
    const clients = ref<Client[]>([]);

    return {
        // State
        currentPage,
        totalPages,
        clients,

        // Getters

        // Actions
        setClients( newClients: Client[]) {
            clients.value = newClients;
        },
        setPage(page: number) {
            if (currentPage.value == page) {
                return;
            }

            currentPage.value = page;
        }
    }
});
