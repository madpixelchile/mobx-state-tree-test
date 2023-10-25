import { flow, types } from "mobx-state-tree";
import { useManageData } from "../../hooks/useManageData";

export const dataModel = types.model('Data', {

    pokemons: types.frozen(),
    errorMessage: '',
    isLoading: false,

}).actions((self) => ({

    setIsLoading: () => {
        self.isLoading = true;
    },

    setErrors: (payload) => {
        self.errorMessage = payload;
        self.isLoading = false;
    },

    setPokemons: ( payload )=>{
        self.pokemons = { ...payload };
        self.isLoading = false;
    },

    getPokemons: flow(function* (payload) {
        const { loadPokemonsByPage } = useManageData();
        yield loadPokemonsByPage(self, payload)
    }),

}))