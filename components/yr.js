import axios from 'axios';
import React from 'react'
import styles from '../styles/Home.module.scss'

const Yr = () => {
    axios.get("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=63.41988744046434&lon=10.486663411852572")
    .then((res)=> {
        console.log(res.data);
    })

    
    
    
    return (
        <div className={styles.yr}>
            YR
        </div>
    )
}

export default Yr
