import { Card, Grid, Row,Text } from "@nextui-org/react"
import { useRouter } from "next/router";

interface pokemonCardProps{
    img:string;
    id:number;
    name:string;
}

export const PokemonCard = ({name,img,id}:pokemonCardProps) => {
const router = useRouter();

const onclick = ()=>router.push(`/pokemon/${id}`)

  return (
    <Grid key={ id } xs={6} sm={3} md={2} xl={1}>
    <Card isHoverable isPressable onClick={onclick}>
        <Card.Body css={{p:1}}>
          <Card.Image 
          src={img}
          width='100%'
          height={140}
          />
        </Card.Body>
        <Card.Footer>
        <Row justify='space-between'>
        <Text transform='capitalize'>{name}</Text>
          <Text>#{id}</Text>
        </Row>
        </Card.Footer>
    </Card>
  </Grid>
  )
}
