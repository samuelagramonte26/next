import Head from "next/head"
import { NavBar } from "../ui"



export const MainLayout = ({children,titlePage}:{children:JSX.Element | JSX.Element[],titlePage?:string }) => {
  return (
    <>
            <Head>
                <title> {titlePage ?? 'Pokemon App'}</title>
                <meta name="author" content="Sam dev"/>
                <meta name="description" content="Informacion sobre pokemon {pokemonName}"/>
                <meta name="keywords" content="{pokemonName}, pokemon,pokedex"/>

            </Head>

           <NavBar/>

            <main>
                {children}
            </main>
    </>
  )
}
