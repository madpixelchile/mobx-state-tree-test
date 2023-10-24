import { types } from "mobx-state-tree";

export const dataModel = types.model('Data', {

    pokemons: types.frozen(),
    errorMessage: '',
    isLoading: false,

}).actions((self) => ({

    setIsLoading: ()=>{
        self.isLoading = true;
    },

    setPokemons: (payload) => {
        self.pokemons = { ...payload };
        self.isLoading = false;
    },

    setErrors: (payload) => {
        self.errorMessage = payload;
        self.isLoading = false;
    }

}))