import { DartLayout } from './components/layout/DartLayout'
import { MainLayout } from './components/layout/MainLayout'

export default function AboutPage() {
  return (

    <h1>About Page</h1>

  )
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DartLayout>
        {page}
      </DartLayout>
    </MainLayout>
  )
}