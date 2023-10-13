import '@/styles/globals.css'
import styles from '../../styles/styles.module.css';
import type { AppProps } from 'next/app'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <div className={styles.container}>
        <div className={styles.leftSideBar}></div>
        <div className={styles.li}>
          <div><Sidebar></Sidebar></div>
        </div>
        <div className={styles.li}>
          <div>
            <Header></Header>
          </div>
          <div><Component {...pageProps} /></div>

        </div>

      </div>

    </>
  )
}
