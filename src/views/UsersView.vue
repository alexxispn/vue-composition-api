<template>
  <div class="users">
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-else>Users: {{ users.length }}</h2>
    <h3 v-if="errorMsg">Error on loading users</h3>
    <div v-if="!isLoading && !errorMsg">
      <UserList :users="users" v-slot="{ user }">
        <li>
          <h4>Name: {{ user.first_name }} {{ user.last_name }}</h4>
          <h4>Email: {{ user.email }}</h4>
        </li>
      </UserList>
    </div>
  </div>
  <button @click="prevPage" :disabled="(currentPage === 1)">Prev</button>
  <button @click="nextPage" :disabled="(currentPage === totalPages)">Next</button>
  <span>Page {{ currentPage }} of {{ totalPages }}</span>
</template>

<script>
import UserList from "@/components/UserList.vue";
import useUsers from "@/composables/useUsers";

export default {
  name: "UsersView",
  components: {UserList},
  setup() {
    const {users, isLoading, errorMsg, currentPage, totalPages, prevPage, nextPage} = useUsers();
    return {users, isLoading, errorMsg, currentPage, totalPages, prevPage, nextPage};
  }
};

</script>

<style scoped>
li {
  padding: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
