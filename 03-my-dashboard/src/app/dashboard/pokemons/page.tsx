import { SimplePokemon,PokemonResponse } from '@/pokemons';
import { PokemonGrid } from '@/pokemons';
import { Metadata } from 'next';


export const metadata:Metadata = {
    title:'Pokemon page',
    description:'Listado de pokemones'
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json())

    const pokemons = data.results.map(pockemon => ({
        id: pockemon.url.split("/").at(-2)!,
        name: pockemon.name
    }));
   // throw new Error('ESTO ES UN ERROR')
    return pokemons;
}

export default async function PockemonPage() {
    const data = await getPokemons(151);

    return (
        <div className='flex flex-col'>
            <span className='text-5xl my-2 '>Listado de pokemons <small>estatico</small></span>
            <PokemonGrid pokemons={data} />
        </div>
    );
}