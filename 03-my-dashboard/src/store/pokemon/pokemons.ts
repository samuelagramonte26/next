import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    [key: string]: SimplePokemon
}


const initialState: PokemonState = {
    '1': { id: '1', name: 'bolbasaur' }
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        tooglePokemon:(state,action:PayloadAction<SimplePokemon>)=>{
            if(!!state[action.payload.id]){
                delete state[action.payload.id]
                return;
            }
            state[action.payload.id] = action.payload
        }
    }
});

export const { tooglePokemon } = pokemonSlice.actions

export default pokemonSlice.reducer