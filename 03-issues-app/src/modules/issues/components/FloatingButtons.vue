<script setup lang="ts">
  enum SizeEnum {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
    ExtraLarge = 'xl',
  }

  interface FabButton {
    icon: string;
    color?: string;
    size?: 'xs'|'sm'|'md'|'lg'|'xl';
    action: () => void;
  }

  interface Props{
    buttons: FabButton[]
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="fab">
		<q-btn class="q-mr-md"
      v-for="(button, index) of props.buttons" round
      :color="button.color || 'primary'"
      :icon="button.icon"
      :size="button.size || 'md'"
      :key="index"
      @click="button.action"
    />
	</div>
</template>

<style lang="css" scoped>
.fab {
	position: fixed;
	bottom: 30px;
	right: 30px;
}
</style>
