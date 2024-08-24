import React, { useEffect, useState } from 'react'
import styles from './funfact.module.css';
import logo from '../../assets/lightlogo.png'
import bottomImage from '../../assets/bottomdark.png';
import { funFactArr } from '../../data/funfact';



function FunFact({setComponent}) {
    
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 4));
    console.log(randomNumber);
    useEffect(()=>{
        setTimeout(()=>{
            setComponent('spin')
        },3000);
    },[])
  return (
    <div className={`flex-col-center ${styles.FunFact}`}>
        <div className={`flex-col-center ${styles.logoContainer}`}>
            <img src={logo} alt="logo img" />
        </div>
        <div className={`flex-row-center ${styles.funFactImgContainer}`}>
            <img src={`${funFactArr[randomNumber]}`} alt="" />
            <div className={styles.loading}>
            <span className={styles.loader}>Loading</span>
            </div>
        </div>
        <div className={styles.bottomImage}>
            <img src={bottomImage} alt="img" />
        </div>
    </div>
  )
}

export default FunFact;