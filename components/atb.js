import React from 'react'

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
