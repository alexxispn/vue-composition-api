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

</template>

<script>
import UseTodos from "@/composables/useTodos";

export default {
  name: "TodoVuex",
  setup() {
    const {currentTab, tabs, all, completed, pending, toggleTodo, filteredTodos} = UseTodos();
    return { currentTab, tabs, all, completed, pending, toggleTodo, filteredTodos };
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
</style>
