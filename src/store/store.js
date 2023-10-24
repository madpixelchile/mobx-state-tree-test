import { types } from 'mobx-state-tree';
import { counterModel, dataModel } from './models';

const RootStore = types.model('RootStore', {
    counter: types.optional(counterModel, { count: 0 }),
    pokemonData: types.optional(dataModel, { pokemons: types.frozen(), errorMessage: '', isLoading: false }),
})

const store = RootStore.create();

export default store;

