import React, {useEffect, useState} from 'react'
import styles from '../styles/Home.module.scss'

function Clock ()  {
    
    let days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]
    let months = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]

    const [clock, setClock] = useState("00:00:00");
    const [date, setDate] = useState();

    
        setInterval(function () {
            const today = new Date();
            let h = today.getHours().toString().padStart(2, "0");
            let m = today.getMinutes().toString().padStart(2, "0");
            let s = today.getSeconds().toString().padStart(2, "0");

 
            setClock(`${h}:${m}:${s}`);
            
            if (s === "00") {
                let day = today.getDay();
                let month = today.getMonth();
                let d = today.getDate();

                setDate(days[day] + " " + d + "." + months[month]);
            }




            
    
        }, 1000);




    return (
        <div className={styles.clockParent}>
            <h1 className={styles.clock}>{clock}</h1>
            <h2 className={styles.date}>{date}</h2>
        </div>
    )
}

export default Clock
