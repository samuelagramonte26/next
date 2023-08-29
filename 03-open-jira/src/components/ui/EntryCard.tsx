import { UIContext } from "@/context/ui"
import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { DragEvent, useContext } from 'react'
import { dateFunctions } from "../../../utils"

interface props {
  entry: Entry
}

export const EntryCard = ({ entry }: props) => {

  const { startDraagging, endDraagging } = useContext(UIContext)
  const { push } = useRouter()

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('idEntry', entry._id);
    startDraagging();
  }

  const onDragEnd = (event: DragEvent) => {
    endDraagging();
  }

  const onClick = () => {
    push(`/entries/${entry._id}`)
      
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClick}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">{dateFunctions.getFormatDistanceToNow(entry.createdAt)}</Typography>
        </CardActions>
      </CardActionArea>

    </Card>
  )
}
