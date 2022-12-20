<template>
  <h1 v-if="!pokemon && !errorMsg">Loading...</h1>
  <h1 v-else-if="errorMsg">{{ errorMsg }}</h1>
  <template v-else>
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default"/>
  </template>
  <br>
  <router-link :to="{ name: 'pokemon-search' }">Search Pokemon</router-link>
</template>

<script>
import {watch} from "vue";
import {useRoute, onBeforeRouteLeave} from "vue-router";
import usePokemon from "@/composables/usePokemon";

export default {
  name: "PokemonView",
  setup() {
    const route = useRoute();
    const {pokemon, isLoading, errorMsg, searchPokemon} = usePokemon(route.params.id);
    watch(
        () => route.params.id,
        (id) => searchPokemon(id)
    );
    onBeforeRouteLeave(() => {
      const answer = window.confirm("Are you sure you want to leave?");
      if (!answer) return false;
    });

    return {
      pokemon,
      isLoading,
      errorMsg,
    };
  }
}
</script>

<style scoped>

</style>
