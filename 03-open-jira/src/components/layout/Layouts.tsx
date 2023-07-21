import { Box } from "@mui/material"
import Head from "next/head";
import { Navbar, SideBar } from "../ui";

interface props {
    title?: string;
    children: JSX.Element | JSX.Element[]
}

export const Layouts = ({ title = 'OpenJira', children }: props) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar />
            <SideBar/>

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
}
