// components/Navbar.js
'use client'
import Link from 'next/link';
import styles from '../../../styles/styles.module.css';
import IconSetting from '../icons/IconSetting';
import IconHome from '../icons/IconHome';
import IconManage from '../icons/IconManage';
import IconOrder from '../icons/IconOrder';
import IconBooking from '../icons/IconBooking';
import IconApoinment from '../icons/IconApoinment';
import IconWarehouse from '../icons/IconWarehouse';
import IconCustomer from '../icons/IconCustomer';
import { useState } from 'react';

function Sidebar({ children }: any) {
    const [activeLink, setActiveLink] = useState("trang");
    return (
        <nav className={styles.nav}>
            <div className={styles.menu}>Menu</div>
            <div className={`${styles.icon} ${activeLink === 'Trang Chủ' ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setActiveLink('Trang Chủ')}>
                <IconHome width={20} height={20}></IconHome>
                <Link href="/" className={styles.navLink}>
                    Trang Chủ
                </Link>
            </div>
            <div className={styles.icon}>
                <IconManage width={20} height={20}></IconManage>
                <Link href="/about" className={styles.navLink}>
                    Quản Lý
                </Link>
            </div>
            <div className={styles.icon}>
                <IconOrder width={20} height={20}></IconOrder>
                <Link href="/addproduct" className={styles.navLink}>
                    Thêm Sản Phẩm
                </Link>
            </div>
            <div className={styles.icon}>
                <IconBooking width={20} height={20}></IconBooking>
                <Link href="/home" className={styles.navLink}>
                    Tiện Ích
                </Link>
            </div>
            <div className={styles.icon}>
                <IconApoinment width={20} height={20} />
                <Link href="/calendar" className={styles.navLink}>
                    Lịch Hẹn
                </Link>
            </div>
            <div className={styles.icon}>
                <IconWarehouse width={20} height={20} />
                <Link href="/contact" className={styles.navLink}>
                    Quản Lý Kho
                </Link>
            </div>
            <div className={styles.icon}>
                <IconCustomer width={20} height={20} />
                <Link href="/customer" className={styles.navLink}>
                    Khách hàng
                </Link>
            </div>
            <div className={styles.icon}>
                <IconSetting width={20} height={20} ></IconSetting>
                <Link href="/contact" className={styles.navLink}>
                    Cài Đặt Tài Khoản
                </Link>
            </div>
            <main>{children}</main>
        </nav>
    );
}

export default Sidebar;