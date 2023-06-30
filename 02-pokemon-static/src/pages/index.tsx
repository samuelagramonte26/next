
import { MainLayout } from '@/components/layout'
import { GetStaticProps, NextPage } from 'next'


const HomePage:NextPage = () => {
  return (
    <MainLayout>
    <h1>Hello word!</h1>

    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = (ctx) => {


  return {
    props:{

    }
  }
}
export default HomePage