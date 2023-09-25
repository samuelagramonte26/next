import { Layout } from '@/components'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import Cookies from "js-cookie";

const ThemeChangerPage = ({theme}:{theme:string}) => {

    const [currentTheme, setCurrentTheme] = useState(theme)

    const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentTheme(e.target.value)
        Cookies.set("theme", e.target.value);
        
    }
    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={currentTheme}
                            onChange={onThemeChange}
                        >
                            <FormControlLabel value='light' control={<Radio />} label='Light' />
                            <FormControlLabel value='dark' control={<Radio />} label='Dark' />
                            <FormControlLabel value='custom' control={<Radio />} label='Custom' />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
        </Layout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

     
    const { theme = 'light', name = 'No name' } = req.cookies;
    const validThemes = ['light','dark','custom'];
console.log({theme});


    return {
        props: {
            theme: validThemes.includes( theme ) ? theme : 'dark',
            name,
        }
    }
}

export default ThemeChangerPage