<template>
  <ul>
    <slot v-for="user in users"
          :user="user"
          :key="user.id">
    </slot>
  </ul>
</template>

<script>

export default {
  name: "UserList",
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
