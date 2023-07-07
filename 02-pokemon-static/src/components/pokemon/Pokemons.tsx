import { Grid } from "@nextui-org/react"
import { FavoriteCardPokemmon } from "./FavoriteCardPokemmon"


export const Pokemons = ({pokemonsIds}:{pokemonsIds:number[]}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">

    {
      pokemonsIds.map(id => (<FavoriteCardPokemmon id={id} key={id}/>))
    }

  </Grid.Container>
  )
}
