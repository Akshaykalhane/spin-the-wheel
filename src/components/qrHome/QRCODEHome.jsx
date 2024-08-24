import React, { useState } from 'react'
import styles from './qrcodehome.module.css';
import bottomImage from '../../assets/qrbottomimg.png';
import logo from '../../assets/qrhomelogo.png'
import rightImg from '../../assets/qrhomepatch.png'
import qrImg from '../../assets/QR.png';
import arrowIcon from '../../assets/arrowicon.png'
import smallIcons from '../../assets/smallicons.png'

function QRCODEHome({setComponent}) {

    const [loading,setLoading]=useState(false);
    
  return (
    <div className={`flex-col-center ${styles.QRCODEHome}`}>
        <div className={`flex-col-center ${styles.logoContainer}`}>
            <img src={logo} alt="logo img" />
        </div>
        <div className={`flex-col-center ${styles.qrCodeWindow}`}>
            <img src={qrImg} alt="qrimg" />
            <div className={`flex-row-center ${styles.buttonContainer}`} onClick={()=>setComponent('fun')}>
                <button>Scan to Start</button>
                <img src={arrowIcon} alt="arrow" />
            </div>
            <div className={styles.smallIcons}>
                <img src={smallIcons} alt="icons" />
            </div>
        </div>
        <div className={styles.rightImg}>
            <img src={rightImg} alt="right img" />
        </div>
        <div className={styles.bottomImage}>
            <img src={bottomImage} alt="img" />
        </div>
    </div>
  )
}

export default QRCODEHome;