import { useTheme, Spacer, Text, Image, Link, Grid } from "@nextui-org/react"
import NextLink from 'next/link'

export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>
      <Image
        width={70}
        height={70}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="app icon"
      />
      <NextLink href='/'  >
          <Text color="white" h2>P<span>okemon</span> </Text>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites'  > 
          <Text color="white">Favoritos</Text>
      </NextLink>

    </div>
  )
}
