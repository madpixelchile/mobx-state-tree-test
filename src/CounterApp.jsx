
import { observer, inject } from 'mobx-react';
import { useEffect } from 'react';
import { useManageData } from './hooks/useManageData';

export const CounterApp = inject('store')
    (observer(  
        ({ store }) => {
            const { counter, pokemonData } = store;

            const { loadPokemons, loadPokemonByPage } = useManageData();

            const handleIncrement = () => {
                counter.increment(1);
            };
            const handleDecrement = () => {
                counter.decrement(1);
            };
            const handleReset = () => {
                counter.reset();
            };
            const startgetData = ()=>{
                // loadPokemons();
                loadPokemonByPage(counter.count);
            }
            useEffect(()=>{
                startgetData();
            },[]);

            useEffect(()=>{
                startgetData();
            },[counter.count])

            return (
                <>
                    <h1>Page: { counter.count }</h1>
                    <div style={{marginBottom: '20px'}}>
                        <button onClick={handleIncrement} >Aumentar</button>
                        <button onClick={handleDecrement} >Disminuir</button>
                        <button onClick={handleReset} >Reset</button>
                    </div>
                    <div>
                        { JSON.stringify(!pokemonData.errorMessage ? pokemonData.pokemons : pokemonData.errorMessage) }
                        { pokemonData.isLoading && <p>Is loading...</p> }
                    </div>

                </>
            )
        }
    ));

