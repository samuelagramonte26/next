
import { pokeApi } from '@/api'
import { MainLayout } from '@/components/layout'
import { GetStaticProps, NextPage } from 'next'
import { PokemonListResponse, SmallResull } from '../../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '@/components/pokemon';

interface props {
  pokemons: SmallResull[]
}
const HomePage: NextPage<props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <MainLayout titlePage='Listado de pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((poke) => (

            <PokemonCard key={poke.id} {...poke} />

          ))
        }
      </Grid.Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallResull[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));
  return {
    props: {
      pokemons
    }
  }
}
export default HomePage