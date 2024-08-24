import React, { useEffect } from 'react';
import styles from './congrats.module.css';
import logo from '../../assets/lightlogo.png'
import bottomImage from '../../assets/bottomdark.png';
import Confetti from 'react-confetti';

function Congratulation() {
    useEffect(()=>{
        //reset all states
    },[])
  return (
    <div className={`flex-col-center ${styles.Congratulation}`}>
        <Confetti />
         <div className={`flex-col-center ${styles.logoContainer}`}>
            <img src={logo} alt="logo img" />
        </div>
        <div className={`flex-col-center ${styles.congratsBox}`}>
            <div className={`flex-col-center ${styles.congratsH2}`}>
                <h2>Congrations</h2>
            </div>
            <div className={`flex-col-center ${styles.rewardBox}`}>
                <h2>Please Collect</h2>
                <button className={`flex-col-center ${styles.rewardBtn}`}>
                    Your Gift
                </button>
            </div>
        </div>
        <div className={styles.bottomImage}>
            <img src={bottomImage} alt="img" />
        </div>
    </div>
  )
}

export default Congratulation