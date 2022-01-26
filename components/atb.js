import React from 'react'
import createEnturClient from '@entur/sdk'


const Atb = () => {
    


    const click = () => {
        console.log("Hei")
    }
    
    return (
        <div onClick={click}>
            Atb
        </div>
    )
}

export default Atb
