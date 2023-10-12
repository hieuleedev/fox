// components/Header.js
import React from 'react';
import styles from '../../../styles/styles.module.css';
import IconNotification from '../icons/IconNotification';
import IconLooking from '../icons/IconLooking';
import IconAccount from '../icons/IconAccount';
import IconDown from '../icons/IconDown';
function Header() {
  return (
    <header className="">
      <div className={styles.header}>
        <div className={styles.searchContainer}>

          <input type="text" placeholder='tìm kiếm sản phẩm ' className={styles.searchInput} ></input>
          <div className={styles.searchIcon}>
            {/* Đây là nơi để bạn đặt biểu tượng kính lúp */}
            <IconLooking width={25} height={25}></IconLooking>
          </div>
        </div>
        <div className={styles.Noti}>
          <div >Thông báo</div>
          <IconNotification className={styles.iconNoti} width={30} height={30} >  </IconNotification>
          <span className={styles.sumNoti}>6</span>
        </div>
        <div className={styles.Account}>
          <div >Hieu Lee</div>
          <IconAccount className={styles.iconAccount} width={30} height={30} ></IconAccount>
          <IconDown width={15} height={15} > </IconDown>
        </div>
      </div>
    </header>
  );
}

export default Header;





