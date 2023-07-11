import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Pokemon, PokemonListResponse, SmallResull } from "../../../interfaces"
import { MainLayout } from "@/components/layout"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { useState } from "react"
import { getPokemonByIdOrName, localFavorites } from "@/utils"
import confetti from "canvas-confetti"
import { pokeApi } from "@/api"


interface props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<props> = ({ pokemon }) => {

  const [isFavorite, setFavorites] = useState<boolean>(localFavorites.isFavorite(pokemon.id))
  const toggleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setFavorites(!isFavorite)

    if (isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }


  return (
    <MainLayout titlePage={`${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>

          <Card isHoverable css={{ padding: '30px' }}>

            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}

              />
            </Card.Body>

          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!isFavorite}
                onClick={toggleFavorites}
              >
                {
                  isFavorite ? (<>Quitar de favoritos</>) : (<>Guadar en favoritos</>)
                }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" gap={0} display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name: Name } = params as { name: string };
  const response = await getPokemonByIdOrName(Name);
  if(!response){
      return {
        redirect:{
          destination:'/',
          permanent:false
        }
      }
  }

  const { id, name, sprites } =response!;
  const pokemon = { id, name, sprites }
  return {
    props: {
      pokemon
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const pokemons = (await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')).data;

  return {
    paths: pokemons.results.map(({ name }: SmallResull) => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}
export default PokemonByNamePage