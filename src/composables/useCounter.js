import {ref} from "vue";

const useCounter = (initValue = 0) => {
    const counter = ref(initValue)
    return {
        counter,
        increment: () => counter.value++,
        decrement: () => counter.value--
    }
}

export default useCounter
