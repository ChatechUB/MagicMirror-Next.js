import React, {useEffect, useState} from 'react';
import { collection, getDocs, query } from "firebase/firestore";
import db from './firebase.js';
import styles from '../styles/Home.module.scss'


const MOTD = () => {

  const [allMOTD, setAllMOTD] = useState([]);
  const [displayMOTD, setDisplayMOTD] = useState({message: "Laster..."});
  const [showingMODT, setShowingMODT] = useState(0);

  useEffect(() => {
    (async()=>{
      const data = await getData();
      updateMODT(data);

      let intervalID = setInterval(()=>{updateMODT(data)}, 5000)  
    })();
  }, [])
  
  //Planen er å lage slik at noen beskjeder kan vises hver dag, mens andre har en bestemt
  //dag de skal vises, har ikke rukket å kode dette enda men har en plan på hvordan
  

  const getData = async () => {
    
    const docRef = collection(db, "MOTD")

    const query = await getDocs(docRef)
    let data = []
    query.forEach(doc => {
      data.push({id: doc.id ,data: doc.data()})
    })
    console.log(data);
    setAllMOTD(data);
    return data;
  }


  const updateMODT = (data) => {
    
    const random = Math.floor(Math.random() * data.length-0.1)
    const current = data[random].data
    console.log(random);
    console.log(current);
    setDisplayMOTD(current)
  }

// const list = allMOTD.map(e => {
//   return(
//     <div>
//       <h2>{e.data.message}</h2>
//     </div>
//   )
// })

  
  return <div className={styles.MOTDContainer}>
      <h1 className={styles.MOTD}> {displayMOTD.message} </h1>
  </div>;
};

export default MOTD;
