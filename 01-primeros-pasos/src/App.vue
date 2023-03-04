/* -------------------------------------------------------------------------- */
/*                               Consideraciones                              */
/*                                                                            */
/* 1 - Al importar un archivo extrerno se debe sacar la palabra setup         */
/* de la etiqueta script                                                      */
/*                                                                            */
/* 2 - En el archivo externo se debe usar la importación de defineComponent   */
/* (usar composition API: setup)                                              */
/* -------------------------------------------------------------------------- */

<script lang="ts" src="./App.ts"></script>

<template>
  <div class="wrapper">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increase">+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
