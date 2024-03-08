import Image from "next/image"
import { SimplePokemon } from "../interfaces"
import { PokemonCard } from "./PokemonCard"

interface props {
    pokemons:SimplePokemon[]
}
export const PokemonGrid = ({pokemons}:props) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
    {
        pokemons.map(pokemon => (
            // <Image
            //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pockemon.id}.svg`}
            //     width={100}
            //     height={100}
            //     alt={pockemon.name}
            // />
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))
    }
</div>
  )
}
