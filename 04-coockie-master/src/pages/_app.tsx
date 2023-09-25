import '@/styles/globals.css'
import { darkTheme, lightTheme, customTheme } from '@/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Cookies from 'js-cookie'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

interface props extends AppProps {
  theme: string
}

export default function App({ Component, pageProps }: AppProps) {

  //const validThemes = ['light', 'dark', 'custom']
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const theme = Cookies.get('theme') || 'light'

    const selectedTheme = theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : customTheme;
    setCurrentTheme(selectedTheme)
  }, [])
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
