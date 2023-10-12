// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/styles.module.css';
import IconArrowForward from "../icons/IconArrowForward";
import Logi from '../img/logi.jpg'
import IconSetting from '../icons/IconSetting';
import IconHome from '../icons/IconHome';
import IconManage from '../icons/IconManage';
import IconOrder from '../icons/IconOrder';
import IconBooking from '../icons/IconBooking';
function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.menu}>Menu</div>
            <div className={styles.icon}>
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
                <Link href="/contact" className={styles.navLink}>
                    Thêm Sản Phẩm
                </Link>
            </div>
            <div className={styles.icon}>
                <IconBooking width={20} height={20}></IconBooking>
                <Link href="/contact" className={styles.navLink}>
                    Tiện Ích
                </Link>
            </div>
            <div className={styles.icon}>
                <IconSetting width={20} height={20} ></IconSetting>
                <Link href="/contact" className={styles.navLink}>
                    Cài Đặt tài Khoản
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;