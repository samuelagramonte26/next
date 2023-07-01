import  DartLayout  from '../components/layout/DartLayout'
import  MainLayout  from '../components/layout/MainLayout'

export default function AboutPage() {
  return (

    <h1>About Page</h1>

  )
}

AboutPage.getLayout = function getLayout(page:JSX.Element) {
  return (
    <MainLayout>
      <DartLayout>
        {page}
      </DartLayout>
    </MainLayout>
  )
}