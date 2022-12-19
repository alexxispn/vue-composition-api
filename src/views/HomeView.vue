<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h2>{{ ironman }}</h2>
    <h2>{{ hulk }}</h2>
    <h2></h2>
    <button @click="toggleName">Cambiar nombres</button>
    <button @click="toggleAge">Cambiar edad</button>
    <h3>{{ ironmanIsAlive }}</h3>
    <h3>{{ hulkIsAlive }}</h3>
    <button @click="toggleIsAlive">Cambiar estado</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'HomeView',
  setup() {
    const ironman = ref({name: 'Tony', age: 50})
    const hulk = ref({name: 'Bruce', age: 50})
    const ironmanIsAlive = ref(true)
    const hulkIsAlive = ref(true)

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      toggleName: () => {
        ironman.value.name = ironman.value.name === 'Tony' ? 'Tony Stark' : 'Tony'
        hulk.value.name = hulk.value.name === 'Bruce' ? 'Bruce Banner' : 'Bruce'
      },
      toggleAge: () => {
        ironman.value.age = ironman.value.age === 50 ? 51 : 50
        hulk.value.age = hulk.value.age === 50 ? 51 : 50
      },
      toggleIsAlive: () => {
        ironmanIsAlive.value = !ironmanIsAlive.value
        hulkIsAlive.value = !hulkIsAlive.value
      }
    }
  }
}
</script>
