import Image from 'next/image'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import styles from '../../styles/styles.module.css';
import Card from '../components/card/Card'
import ChartWareHouse from '../components/chart/ChartWareHouse'
import RecentOrders from '../components/orders/RecentOrders'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <div className={styles.container}>
        <div className={styles.leftSideBar}></div>
        <div className={styles.li}>
          <div><Sidebar></Sidebar></div>
        </div>
        <div className={styles.li}><Header></Header></div>
      </div> */}
      <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Card></Card>
        <div className="className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'">
          <ChartWareHouse />
          <RecentOrders />
        </div>
      </main>
    </div>
  )
}
