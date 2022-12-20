import {useStore} from "vuex";
import {computed, ref} from "vue";

const useTodos = () => {
    const store = useStore();
    const currentTab = ref('all');
    const tabs = ['all', 'pending', 'completed'];

    return {
        currentTab,
        tabs,

        all: computed(() => store.getters["getAllTodos"]),
        completed: computed(() => store.getters["getCompletedTodos"]),
        pending: computed(() => store.getters["getPendingsTodos"]),
        filteredTodos: computed(() => store.getters["getTodosByTabs"](currentTab.value)),
        toggleTodo: (id) => store.commit("toggleTodo", id),
    }
}

export default useTodos
