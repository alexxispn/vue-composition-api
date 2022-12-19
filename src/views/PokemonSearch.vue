<template>
  <h1>Search Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number" placeholder="151" v-model="pokemonId" ref="pokemonInput" />
  </form>
  <br>
  <span>Press Enter for search</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PokemonSearch",
  setup() {
    const router = useRouter();
    const pokemonId = ref(0);
    const pokemonInput = ref();
    onActivated(() => {
      pokemonInput.value.select();
    });

    return {
      pokemonId,
      pokemonInput,

      onSubmit: () => {
        router.push({ name: "pokemon", params: { id: pokemonId.value } });
      }
    };
  }
}
</script>

<style scoped>

</style>
