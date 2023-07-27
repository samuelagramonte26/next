import { UIContext } from "@/context/ui"
import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { DragEvent, useContext } from 'react'

interface props {
  entry: Entry
}

export const EntryCard = ({ entry }: props) => {

  const { startDraagging, endDraagging } = useContext(UIContext)

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('idEntry', entry._id);
    startDraagging();
  }
  
  const onDragEnd = (event: DragEvent) => {
    endDraagging();
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">{new Date(entry.createdAt).getMinutes()}</Typography>
        </CardActions>
      </CardActionArea>

    </Card>
  )
}
