import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import { MainLayout } from './components/layout/MainLayout'



export default function Home() {
  return (
    <>

      <MainLayout>
       <h1>Home Page</h1>
      </MainLayout>


    </>
  )
}
