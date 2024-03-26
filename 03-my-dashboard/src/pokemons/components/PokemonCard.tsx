'use client'

import Link from "next/link"
import { SimplePokemon } from "../interfaces"
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import pokemonSlice, { tooglePokemon } from '../../store/pokemon/pokemons';

interface props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: props) => {
    const { id, name } = pokemon;
    const isFavorite = useAppSelector(pokemonSlice => !!pokemonSlice.pokemons[id])
    const dispatch = useAppDispatch()

    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={100}
                        height={100}
                        alt={name}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>

                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Mas informacion...
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" onClick={()=>dispatch(tooglePokemon(pokemon))}>

                        <div className="text-red-600">
                            {
                                isFavorite ? <IoHeart/> :  <IoHeartOutline />
                            }
                           
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                            {
                                isFavorite ? 'Es favorito' :  'No es favorito'
                            }
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
