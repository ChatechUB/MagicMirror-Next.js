import React, {useEffect, useState} from 'react'

function Clock ()  {
    
    const [clock, setClock] = useState(0);
    
    
        setInterval(function () {
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            
            setClock(h + ":" + m + ":" + s);
    
        }, 1000);



    return (
        <div>
            <h1 className="clock">{clock}</h1>
        </div>
    )
}

export default Clock
