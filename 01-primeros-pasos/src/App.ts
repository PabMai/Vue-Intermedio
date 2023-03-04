import { ref, defineComponent } from 'vue';
// Version Composition API: setup

export default defineComponent({
  setup() {
    // Properties
    const counter = ref<number>(0);

    // Methods
    const increase = () => {
      counter.value++;
    };

    return {
      counter,
      increase
    };
  }
});
