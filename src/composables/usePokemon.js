import {ref} from 'vue'
import axios from "axios";

const usePokemon = (pokemonId = '1') => {
    const pokemon = ref()
    const isLoading = ref(false)
    const errorMsg = ref(null)

    const searchPokemon = async ( id ) => {
        if (!id) return
        isLoading.value = true
        pokemon.value = null
        errorMsg.value = null
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = response.data
        } catch (e) {
            errorMsg.value = 'Pokemon not found'
        }
        isLoading.value = false
    }
    searchPokemon(pokemonId)

    return {pokemon, isLoading, errorMsg, searchPokemon}
}

export default usePokemon
