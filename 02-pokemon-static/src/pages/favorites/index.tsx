import { MainLayout } from "@/components/layout"
import { NotFoundPokemons, Pokemons } from "@/components/pokemon";
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react"



const FavoritesPage = () => {
  const [pokemonsIds, setPokemonsIds] = useState<number[]>([]);

  useEffect(() => {
    setPokemonsIds(localFavorites.pokemons())
  }, [])

  
  return (

    <MainLayout titlePage="Pokemon - favoritos">
      {
        pokemonsIds.length === 0 ? (<NotFoundPokemons />) : (
        <Pokemons pokemonsIds={pokemonsIds}/>
        )
      }
    </MainLayout>
  )
}

export default FavoritesPage