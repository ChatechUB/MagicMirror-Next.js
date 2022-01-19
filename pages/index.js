import Head from 'next/head'
import Image from 'next/image'
import Atb from '../components/atb'
import Clock from '../components/Clock'
import Hue from '../components/Hue'
import Yr from '../components/yr'
import styles from '../styles/Home.module.scss'

export default function Home() {



  return (
    <div className={styles.container}>
      <Yr/>
      <Atb/>
      <Hue/>
      <Clock/>
    </div>
  )
}
