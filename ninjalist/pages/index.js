import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}> Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat inventore hic excepturi natus autem deserunt ab quia alias maxime, sunt saepe porro adipisci! Laborum necessitatibus nobis quibusdam itaque libero.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quaerat inventore hic excepturi natus autem deserunt ab quia alias maxime, sunt saepe porro adipisci! Laborum necessitatibus nobis quibusdam itaque libero.</p>
      <Link href="/ninjas">
       <a className={styles.btn}>See Ninja Listing</a>
      </Link>

    </div>
  )
}
