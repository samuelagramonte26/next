import Head from "next/head"
import { FC } from "react"
import { NavBar } from "../ui"
import { Box, Grid } from "@mui/material"

interface props {
  children: JSX.Element | JSX.Element[]
}
export const Layout: FC<props> = ({ children }) => {
  return (
    <>
      <Head>

      </Head>
      <nav>
        <NavBar />
      </nav>
      <main style={{ padding: '20px 50px' }}>
        {children}
      </main>
    </>
  )
}
