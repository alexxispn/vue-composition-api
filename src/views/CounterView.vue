<template>
  <h1>Counter View</h1>
  <h2>{{ counter }}</h2>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  name: "CounterView",
  props: {},
  emits: [],
  setup() {
    const {counter, increment, decrement} = useCounter();

    return {
      counter,
      increment,
      decrement,
    };
  },
}

</script>

<style scoped>

</style>
