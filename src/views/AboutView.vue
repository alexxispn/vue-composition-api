<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>

<script>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from "vue";

export default {
  name: 'AboutView',
  setup() {
    const title = ref('About View')
    console.log('Setup se llamo')
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onActivated(() => {
      console.log('onActivated')
    })
    onDeactivated(() => {
      console.log('onDeactivated')
    })
    return {
      title,
      changeTitle() {
        title.value = title.value === 'About View' ? 'About View Changed' : 'About View'
      }
    }
  }
}
</script>
