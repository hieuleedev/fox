import '@/styles/globals.css';
import styles from '../../styles/styles.module.css';
import type { AppProps } from 'next/app';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';// Thay đổi đường dẫn tới file store Zustand
import Link from 'next/link';
import Login from './login';
import { useState } from 'react';
import useAuthStore, { AuthStore } from "../store/useAuthStore"
export default function App({ Component, pageProps }: AppProps) {
  const { isLoggedIn, message }: AuthStore = useAuthStore();
  console.log("isLoggedIn", isLoggedIn);
  console.log("message", message);
  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <>
          <div className={styles.leftSideBar}></div>
          <div className={styles.li}>
            <div><Sidebar></Sidebar></div>
          </div>
          <div className={styles.li}>
            <div>
              <Header></Header>
            </div>
            <Component {...pageProps} />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}





