import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import styles from '../../styles/styles.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <ul className={styles.container}>
        <li className={styles.leftSideBar}></li>
        <li className={styles.li}><Sidebar></Sidebar></li>
        <li className={styles.li}><Header></Header></li>
      </ul>

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div>áhdhasgd</div>
      </main>
    </div>
  )
}
