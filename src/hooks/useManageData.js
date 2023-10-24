import store from "../store/store";
import { getData, getDataByPage } from "../api/api";

export const useManageData = () => {

  const { pokemonData } = store;

  const loadPokemons = async () => {

    const response = await getData('/ditto');
    const { data, ok, errorMessage } = response;
    if (ok) {
      pokemonData.setPokemons(data);
    } else if (!ok) {
      pokemonData.setErrors(errorMessage.message);
    }

  }

  const loadPokemonByPage = async (pageNumber) => {

    const { pokemonData } = store;

    pokemonData.setIsLoading();

    const response = await getDataByPage(pageNumber);
    const { data, ok, errorMessage } = response;
    if (ok) {
      pokemonData.setPokemons(data);
    } else if (!ok) {
      pokemonData.setErrors(errorMessage.message);
    }

  }

  return {
    loadPokemons,
    loadPokemonByPage
  }
}


