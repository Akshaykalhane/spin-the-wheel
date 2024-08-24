import React, { useEffect, useState } from "react";
import styles from "./spinWheel.module.css";
import logo from "../../assets/lightlogo.png";
import bottomImage from "../../assets/bottomdark.png";
import spinPointer from "../../assets/arrow.png";
import spinnerBase from "../../assets/base.png";
import wheel from "../../assets/1.png";
import { wheelsArr,angleList } from "../../data/wheelsData";
import Confetti from "react-confetti";

// winner rotation 3643deg for 1 to 4 this is final for all
//5 and 6 3690deg

function SpinWheel({ spinLeft, onSpin ,handleFailed,totalSpin,rotation,setRotation}) {
  const [isSpin, setIsSpin] = useState(false);

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()* wheelsArr.length));

  const spinStyle = {
    trnasform: isSpin ? `rotate(3600deg)` : "none",
  };

  useEffect(()=>{
    if(isSpin){
      const randomId = Math.floor(Math.random() * wheelsArr.length)
      setRandomNumber(randomId)
    }
    if(spinLeft==0 && !isSpin){
      console.log('left nothing')
      setTimeout(()=>{
        handleFailed();
      },2000)
    }
    console.log(spinLeft,'spin left inside isspin effect');
  },[isSpin])

  const spinTheWheel = () => {
    console.log('spinning');
    if(spinLeft==0){
      handleFailed();
    }
    if(isSpin || spinLeft==0) {
      // console.log('you do not have any spin left');
      return
    };

    setIsSpin(true);
    onSpin();
    const spinDuration = 6000;
    // const spinAngle =3600+180;
      // const spinAngle = 3549 + Math.floor(Math.random()*20);
      // setRotation(prev=>prev+spinAngle);
      // setRotation(360)
    const spinAngle = angleList[spinLeft]+Math.floor(Math.random()*30);
    setRotation(spinAngle);
    setTimeout(()=>{
      setIsSpin(false);
    },spinDuration)

  };

  const generateButtonName=()=>{
    if (isSpin) return "Spinning...";
    if (spinLeft === 3) return "Spin Now";
    if (spinLeft > 0) return "Try Again";
    return "No Spins Left";
  }

  return (
    <div className={`flex-col-center ${styles.SpinWheel}`}>
      <div className={`flex-col-center ${styles.logoContainer}`}>
        <img src={logo} alt="logo img" />
      </div>
      <div className={`flex-col-center ${styles.wheelWrapper}`}>
        <div className={`flex-col-center ${styles.wheelContainer}`}>
          <div
            className={`${styles.wheel} ${styles.wheelCommon}`}
            style={{
              transition: isSpin ? "transform 6s ease-out" : "none",
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {(totalSpin==10 && !isSpin) && <Confetti />}
            <img src={wheelsArr[randomNumber]} alt="wheel" />
          </div>
          <div
            className={`flex-col-center ${styles.spinPointer} ${styles.wheelCommon}`}
          >
            <img src={spinPointer} alt="arrow" />
          </div>
        </div>
        <div
          className={`flex-col-center ${styles.spinnerBase} ${styles.wheelCommon}`}
        >
          <img src={spinnerBase} alt="wheelbase" />
          <div className={styles.buttonBox}>
            <button onClick={() => spinTheWheel()} disabled={isSpin || spinLeft==0 ? true : false}>
              {generateButtonName()}
              {/* spin now */}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bottomImage}>
        <img src={bottomImage} alt="img" />
      </div>
    </div>
  );
}

export default SpinWheel;
