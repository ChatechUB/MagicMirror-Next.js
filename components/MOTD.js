import React, {useEffect, useState} from 'react';
import { doc, getDoc } from "firebase/firestore";
import {db} from './firebase.js';


const MOTD = () => {

  const [currentMOTD, setCurrentMOTD] = useState("LOADING...");


  //setCurrentMOTD("hei");


  

  const today = new Date();
  let month = today.getMonth();
  let d = today.getDate();
  console.log(d);
  console.log(month);
  
  return <div>
      <h1 className="MOTD"> {currentMOTD} </h1>
  </div>;
};

export default MOTD;
