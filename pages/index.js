import Head from 'next/head'
import Image from 'next/image'
import Atb from '../components/atb'
import Yr from '../components/yr'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const text = "YR"

  return (
    <div className={styles.container}>
      <Yr text={text} />
      <Atb/>
    </div>
  )
}
