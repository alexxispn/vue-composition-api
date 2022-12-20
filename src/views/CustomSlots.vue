<template>
  <h1>Learning Slots</h1>
  <button @click="openModal">Open Modal</button>

  <Modal v-if="isOpen" @close="closeModal" title="Modal Title">
    <template v-slot:header>
      <h2>Modal Header</h2>
    </template>
    <template v-slot:body>
      <p>Modal Body</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Close Modal</button>
    </template>
    <template v-slot:exposed="slotProps">
      <p>{{ slotProps.title }}</p>
    </template>
  </Modal>
</template>

<script>
import {ref} from "vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "CustomSlots",
  components: { Modal },
  setup(){
    const isOpen = ref(false)
    return{
      isOpen,
      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false,
    }
  }
}
</script>

<style scoped>

</style>
