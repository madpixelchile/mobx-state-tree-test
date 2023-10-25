
import { observer, inject } from 'mobx-react';
import { useEffect } from 'react';
import { useCounter } from './hooks';

export const CounterApp = inject('store')
    (observer(  
        ({ store }) => {
            const { counter, pokemonData } = store;

            const { handleIncrement, handleDecrement, handleReset } = useCounter(counter);

            const startgetData = ()=>{
                pokemonData.getPokemons(counter.count);
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
                        <button onClick={()=>handleIncrement(1)} >Aumentar</button>
                        <button onClick={()=>handleDecrement(1)} >Disminuir</button>
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

