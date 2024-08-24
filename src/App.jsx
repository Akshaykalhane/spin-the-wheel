import { useEffect, useState } from 'react'
import styles from './app.module.css';
import QRCODEHome from './components/qrHome/QRCODEHome';
import FunFact from './components/funFact/FunFact';
import SpinWheel from './components/spin-wheel/SpinWheel';
import Congratulation from './components/congrats/Congratulation';
import Failed from './components/fail/Failed';

function App() {
  const [spinLeft, setSpinLeft] = useState(3);
  const [totalSpin,setTotalSpin]=useState(0);
  const [component,setComponent]=useState('home');
  const [rotation,setRotation]=useState(0);

  console.log(rotation);
  
  const handleSpin=()=>{
    setTotalSpin(prev=>prev+1);
    if(spinLeft>0){
      console.log('spin change');
      setSpinLeft(prev=>prev-1);
    }else{
      console.log('no spin left');
    }
  }

  
  const handleFailed=()=>{
    if(spinLeft==0){
      console.log('sorry no spin left');
      setComponent('fail');
    }
  }

  const handleReward=()=>{
    
  }

  useEffect(()=>{
    console.log(spinLeft);
    if(spinLeft==0){
      console.log('zenor spin')
    }
    
  },[spinLeft])

  useEffect(()=>{
    if(totalSpin==10){
      setRotation(6523);
      setTimeout(()=>{
        setComponent('congrats');
      },7000);
    }
    console.log('total spin',totalSpin);
  },[totalSpin])

  useEffect(()=>{
    //get total spin
    // const getTotalSpin = localStorage.getItem();
    //get user data
    //get user spin
  },[])



  return (
    <div className={styles.App}>
      <div className={styles.appWrapper}>
        {component=='home' && <QRCODEHome setComponent={setComponent}/> }
        {component=='fun' && <FunFact setComponent={setComponent} /> }
        {component=='spin' &&  <SpinWheel spinLeft={spinLeft} onSpin={handleSpin} setComponent={setComponent} totalSpin={totalSpin} handleFailed={handleFailed} rotation={rotation} setRotation={setRotation} /> }
        {component=='congrats' &&  <Congratulation  /> }
        {component == 'fail' && <Failed setComponent={setComponent} setSpinLeft={setSpinLeft}  />}
        {/* <FunFact /> */}
      </div>
    </div>
  )
}

export default App
