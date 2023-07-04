import { pokeApi } from "@/api";
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Pokemon } from "../../../interfaces";

interface props{
  pokemon:Pokemon
}
const PokemonPage:NextPage<props> = ({pokemon}) => {
  return (
    <div>PokemonPage</div>
  )
}


export const getStaticProps: GetStaticProps = async({params}) => {

const {id} = params as {id:string};

const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon:data
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {

  const pokemonsIds = [...Array(151)].map((_value, index) =>  (index + 1).toString())

  return {
    paths: pokemonsIds.map((id)=>({
          params: {id}
        })),
    fallback: false
  }
}

export default PokemonPage;