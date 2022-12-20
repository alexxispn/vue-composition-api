<template>
  <div class="users">
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-else>Users: {{ users.length }}</h2>
    <h3 v-if="errorMsg">Error on loading users</h3>
    <div v-if="!isLoading && !errorMsg">
      <ul>
        <li v-for="user in users" :key="user.id">
          <h4>Name: {{ user.first_name }} {{ user.last_name }}</h4>
          <h4>Email: {{ user.email }}</h4>
        </li>
      </ul>
    </div>
  </div>
  <button @click="prevPage" :disabled="(currentPage === 1)">Prev</button>
  <button @click="nextPage" :disabled="(currentPage === totalPages)">Next</button>
  <span>Page {{ currentPage }} of {{ totalPages }}</span>
</template>

<script>
import useUsers from "@/composables/useUsers";

export default {
  name: "UsersView",
  setup() {
    const {users, isLoading, errorMsg, currentPage, totalPages, prevPage, nextPage} = useUsers();
    return {users, isLoading, errorMsg, currentPage, totalPages, prevPage, nextPage};
  }
};

</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

li {
  padding: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
