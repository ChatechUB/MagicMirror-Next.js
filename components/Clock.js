import React, {useState} from 'react'

const Clock =  () => {
    
    let clock = ""

    var x = setInterval(function () {

        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        clock = h + ":" + m + ":" + s;

        console.log(clock)

    
    }, 1000);

    
    return (
        <div>
            <h1> test {clock} </h1>
        </div>
    )
}

export default Clock
