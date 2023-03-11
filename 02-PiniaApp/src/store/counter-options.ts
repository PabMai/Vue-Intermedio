import { defineStore } from "pinia"

export const useCounterOptionsStore = defineStore('counter-options', {
    state: () => ({ 
      count: 0, 
      lastChanged: undefined
    }),

    getters: {
      squareCount: (state) => state.count * state.count,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })