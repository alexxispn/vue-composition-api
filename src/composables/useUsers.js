import {ref} from "vue";
import axios from "axios";

const useUsers = () => {
    const users = ref([])
    const isLoading = ref(true)
    const currentPage = ref(1)
    const totalPages = ref(1)
    const errorMsg = ref(null)

    const getUsers = async (page = 1) => {
        if (page < 1) page = 1
        isLoading.value = true
        const {data} = await axios.get(`https://reqres.in/api/users`, {params: {page}})
        if (data) {
            users.value = data.data
            currentPage.value = page
            totalPages.value = data.total_pages
            errorMsg.value = null
        } else {
            errorMsg.value = 'Error on loading users'
        }
        isLoading.value = false
    }
    getUsers(1)

    return {
        users,
        isLoading,
        currentPage,
        totalPages,
        errorMsg,
        getUsers,

        nextPage: () => getUsers(currentPage.value + 1),
        prevPage: () => getUsers(currentPage.value - 1)
    }
}

export default useUsers
