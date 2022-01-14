import Head from 'next/head'
import Image from 'next/image'
import Atb from '../components/atb'
import Yr from '../components/yr'
import styles from '../styles/Home.module.scss'

export default function Home() {



  return (
    <div className={styles.container}>
      <Yr/>
      <Atb/>
    </div>
  )
}
