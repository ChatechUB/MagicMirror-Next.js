import React from 'react'

function Clock() {
    
    var x = setInterval(function() {


        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        const {test} = h + ":" + m + ":" + s;


        const clock2 = ({h, m, s}) => {
            
            
            return(
                h + ":" + m + ":" + s
            )
        }
        

        
    
    }, 1000);

    
    return (
        <div>
            <h1> hello {clock2} </h1>
        </div>
    )
}

export default Clock
