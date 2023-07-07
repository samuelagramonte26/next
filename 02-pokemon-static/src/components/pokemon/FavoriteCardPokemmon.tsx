import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router";

export const FavoriteCardPokemmon = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleClick = (id: number) => router.push(`/pokemon/${id}`)

  return (
    <Grid xs={6} sm={3} xl={1} key={id}>
      <Card isHoverable isPressable onClick={() => handleClick(id)}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  )
}
