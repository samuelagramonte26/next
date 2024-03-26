import {  Favorites } from '@/pokemons';



export default async function PockemonFavoritesPage() {
   

    return (
        <div className='flex flex-col'>
            <span className='text-5xl my-2 '>Listado de favoritos <small>Global State</small></span>
            <Favorites/>
        </div>
    );
}