import {createStore} from 'vuex'
import {v4 as uuidv4} from 'uuid'

export default createStore({
    state: {
        todos: [
            {id: 1, text: 'Recolect infinite stones', completed: false},
            {id: 2, text: 'Soul stone', completed: false},
            {id: 3, text: 'Power stone', completed: true},
            {id: 4, text: 'Time stone', completed: true},
            {id: 5, text: 'Space stone', completed: true},
            {id: 6, text: 'Reality stone', completed: false},
            {id: 7, text: 'Mind stone', completed: false},
        ]
    },
    getters: {
        getPendingsTodos: (state) => state.todos.filter(todo => !todo.completed),
        getCompletedTodos: (state) => state.todos.filter(todo => todo.completed),
        getAllTodos: (state) => state.todos,
        getTodosByTabs: (_, getters) => (tab) => {
            switch (tab) {
                case 'all': return getters.getAllTodos
                case 'pending': return getters.getPendingsTodos
                case 'completed': return getters.getCompletedTodos
            }
        }
    },
    mutations: {
        toggleTodo: (state, id) => {
            const todo = state.todos.find(todo => todo.id === id)
            todo.completed = !todo.completed
        },
        addTodo: (state, text) => {
            if (text.length <= 1) return
            const newTodo = {
                id: uuidv4(),
                text,
                completed: false
            }
            console.log(newTodo)
            state.todos.push(newTodo)
        }
    },
    actions: {},
    modules: {}
})
