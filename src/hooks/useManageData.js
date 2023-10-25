import store from "../store/store";
import { getData, getDataByPage } from "../api/api";
import { flow, getRoot } from "mobx-state-tree";

export const useManageData = () => {

  const { pokemonData } = getRoot(store);

  const loadPokemons = async () => {

    const response = await getData('/ditto');
    const { data, ok, errorMessage } = response;
    if (ok) {
      pokemonData.setPokemons( data );
    } else if (!ok) {
      pokemonData.setErrors(errorMessage.message);
    }

  }

  const loadPokemonsByPage = flow(function*(payload){ //También podremos utilizar el "self" como primer parámetro para actualizar el estado directamente
    const response = yield getDataByPage(payload);
      const { data, ok, errorMessage } = response;
      pokemonData.setIsLoading();
      if (ok) {
          pokemonData.setPokemons( data );
      } else if (!ok) {
          pokemonData.setErrors(errorMessage.message);
      }
  })

  return {
    loadPokemons,
    loadPokemonsByPage
  }
}


