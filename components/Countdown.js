import React, { useState } from 'react';
import styles from '../styles/Home.module.scss'

export const Countdown = () => {
  
    var countDownDate = new Date("Feb 27, 2022 0:0:0").getTime();
    //var countDownDate = new Date("Jan 2, 2022 18:44:0").getTime();
    
    const [countdownTime, setCountdownTime] = useState();

    let WhatIsCounting = "Petter har bursdag om:"

    var x = setInterval(function() {
    
      var now = new Date().getTime();
    
      var distance = countDownDate - now;
    
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        var d = "d "
        var h = "t "
        var m = "m "
        var s = "s "
    
        if (days < 1) {
            days = ""
            d = ""
        }
    
    
      // Viser tid som er igjen
      setCountdownTime(days + d + hours + h
      + minutes + m + seconds + s);
    
      // Viser text når ferdig
      if (distance < 0) {
        clearInterval(x);
        setCountdownTime("Ferdig");
      }
    }, 1000);
  
  
  return <div className={styles.countdownParent}>
      <h2> {WhatIsCounting} {countdownTime}</h2>
  </div>;
};
