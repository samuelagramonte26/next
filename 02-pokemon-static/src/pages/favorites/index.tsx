import { MainLayout } from "@/components/layout"
import { Text } from "@nextui-org/react"

const FavoritesPage = () => {
  return (
    <MainLayout titlePage="Pokemon favoritos">
        <Text transform="capitalize" h1>Favoritos</Text>
    </MainLayout>
  )
}

export default FavoritesPage