<script setup lang="ts">
import { toRef } from 'vue';

interface LoaderSpinnerProps {
  color?: string;
  size?: string;
  thickness?: number;
  showText?: boolean;
}
const props = withDefaults(defineProps<LoaderSpinnerProps>(), {
  color: 'primary',
  size: '3rem',
  thickness: 2,
  showText: true
});

const color = toRef(props, 'color');
const size = toRef(props, 'size');
const thickness = toRef(props, 'thickness');
const showText = toRef(props, 'showText');

console.log(showText)

</script>

<template>
  <div class="column items-center">
    <q-spinner :color="color" :size="size" :thickness="thickness" />
    <span class="q-mt-sm" v-if="showText">Loading...</span>
  </div>
</template>

<style scoped></style>
