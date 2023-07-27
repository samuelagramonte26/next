import { Layouts } from '@/components/layout'
import { EntryList, NewEntry } from '@/components/ui'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'


export default function Home() {
  return (
    <Layouts title='Home - OpenJira'>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />
      <NewEntry/>

            <CardContent>
              <EntryList status='pending' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >

          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En progreso' />

            <CardContent>
              <EntryList status='in-progress' />

            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} sm={4} >

          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />

            <CardContent>
              <EntryList status='finished' />

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Layouts>
  )
}
