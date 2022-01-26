import React, {useEffect, useState} from 'react';
import { doc, getDoc } from "firebase/firestore";
import {db} from './firebase.js';


const MOTD = () => {

  const [currentMOTD, setCurrentMOTD] = useState("LOADING...");


  //setCurrentMOTD("hei");

  useEffect(() => {
    getData()  
  }, [])
  
  const getData = async () => {

    const docRef = doc(db, "MOTD", "Normal")

    const query = await getDoc(docRef)

    if (query.exists()) {
      setCurrentMOTD(query.data())
      console.log(query.data());
    }

    else {
      console.log("Not found")
    }
  }

  const today = new Date();
  let month = today.getMonth();
  let d = today.getDate();

  
  return <div>
      <h1 className="MOTD"> {currentMOTD} </h1>
  </div>;
};

export default MOTD;
