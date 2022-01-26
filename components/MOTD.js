import React, {useEffect, useState} from 'react';
import { doc, getDoc } from "firebase/firestore";
import db from './firebase.js';
import styles from '../styles/Home.module.scss'


const MOTD = () => {

  const [allMOTD, setAllMOTD] = useState(["test1000"]);
  const [displayMOTD, setDisplayMOTD] = useState("Loading...");
  const [showingMODT, setShowingMODT] = useState(0);


  //setCurrentMOTD("hei");

  useEffect(() => {
    getData()


    let intervalID
    intervalID = setInterval(updateMODT, 5000)  
  }, [])
  
  const getData = async () => {
    
    const docRef = doc(db, "MOTD", "Normal")

    const query = await getDoc(docRef)

    if (query.exists()) {
      setAllMOTD(query.data())
      console.log(query.data());
      updateMODT()

    }
    else {
      console.log("MOTD Not found")
    }
  }

  const updateMODT = () => {
    //code to change modt

  }

  const today = new Date();
  let month = today.getMonth();
  let d = today.getDate();

  
  return <div className={styles.MOTDContainer}>
      <h1 className={styles.MOTD}> {displayMOTD} </h1>
  </div>;
};

export default MOTD;
