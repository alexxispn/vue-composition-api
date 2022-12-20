<template>
  <h1>Thanos' ToDo List</h1>
  <div class="btn-nav">
    <button v-for="tab in tabs" :key="tab"
            :class="{'active': currentTab === tab}"
            @click="currentTab = tab">
      {{ tab }}
    </button>
  </div>
  <div>
    <ul class="todo">
      <li v-for="todo in filteredTodos" :key="todo.id"
          :class="{ completed: todo.completed }" @dblclick="toggleTodo(todo.id)">
        <span>{{ todo.text }}</span>
      </li>
    </ul>
  </div>
  <Modal title="Add a new ToDo" v-if="isModalOpen" @close="closeModal">
    <template v-slot:header>
      <h1>New Task</h1>
    </template>
    <template v-slot:body>
      <form @submit.prevent="addTodo(newTodoText); closeModal()">
        <input type="text"
               placeholder="New Task"
               v-model="newTodoText">
      </form>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Cancel</button>
      <button @click="addTodo(newTodoText); closeModal()">Add</button>
    </template>
  </Modal>
  <button class="add-todo" @click="openModal">Add Todo</button>
</template>

<script>
import UseTodos from "@/composables/useTodos";
import Modal from "@/components/Modal";
import {ref} from "vue";

export default {
  name: "TodoVuex",
  components: {Modal},
  setup() {
    const {currentTab, tabs, all, completed, pending, toggleTodo, filteredTodos, addTodo} = UseTodos();
    const isModalOpen = ref(false);
    return {
      currentTab,
      tabs,
      all,
      completed,
      pending,
      toggleTodo,
      filteredTodos,
      addTodo,
      isModalOpen,
      closeModal: () => isModalOpen.value = false,
      openModal: () => isModalOpen.value = true,
      newTodoText: ref('')
    };
  }
}
</script>

<style scoped>
.todo {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}

.active {
  background-color: black;
  color: white;
}

.active:hover {
  background-color: black;
}

.completed {
  text-decoration: line-through;
}

input {
  display: block;
  height: 1rem;
  margin: 1rem auto;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
</style>
