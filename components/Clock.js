import React, {useEffect, useState} from 'react'

function Clock ()  {
    
    let days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]
    let months = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]

    const [clock, setClock] = useState();
    const [date, setDate] = useState();

    
        setInterval(function () {
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();

 
            setClock(h + ":" + m + ":" + s);
            
            if (s == 0) {
                let day = today.getDay();
                let month = today.getMonth();
                let d = today.getDate();

                setDate(days[day] + " " + d + "." + months[month]);
            }




            
    
        }, 1000);




    return (
        <div>
            <h1 className="clock">{clock}</h1>
            <h2 className="date">{date}</h2>
        </div>
    )
}

export default Clock
