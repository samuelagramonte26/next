import { pokeApi } from "@/api";
import { Pokemon } from "../../interfaces";

export const getPokemonByIdOrName = async (idOrName: string) => {
    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${idOrName}`);
        return data
    } catch (error) {
        return null
    }
}