import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import {MenuOutlined} from '@mui/icons-material'
import NextLink from "next/link"

export const NavBar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
        <Toolbar>
            <IconButton
            size="large"
            edge='start'
            >
                <MenuOutlined/>
            </IconButton>

            <NextLink style={{textDecoration:'none'}} href='/' >
                < >
                <Typography variant="h6" color='white'>CoockieMaster</Typography>
                </>
            </NextLink>
            <div style={{flex:3}}/>

            <NextLink style={{textDecoration:'none'}} href='/theme-changer' >
                <>
                <Typography variant="h6" color='white'>Cambiar tema</Typography>
                </>
            </NextLink>

        </Toolbar>
    </AppBar>
  )
}
