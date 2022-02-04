import Head from 'next/head'
import Image from 'next/image'
import Atb from '../components/atb'
import { Chantina } from '../components/Chantina'
import Clock from '../components/Clock'
import { Countdown } from '../components/Countdown'
import Hue from '../components/Hue'
import MOTD from '../components/MOTD.jsx'
import Yr from '../components/yr'
import styles from '../styles/Home.module.scss'

export default function Home() {



  return (
    <div className={styles.gridContainer}>

      <Atb/>
      <Clock/>
      <MOTD/>
      <Countdown/>
      <Chantina/>
    </div>
  )
}
