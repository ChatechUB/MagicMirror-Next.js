import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.scss'
import axios from 'axios';


export const Chantina = ({ matretter, priser }) => {
    
	const [data, setData] = useState({Matrett: "mat", Pris: "pris"})

    useEffect(() => {
		axios.get("https://api.chantina.no/getWeek")
		.then((res)=> {
			setData(res.data[new Date().getDay() - 1])
		})
	}, [])
 
    
    return (
        <div className={styles.chantinaParent}>
            <h1 className={styles.chantina}>Dagens Lunsj er</h1>
			<h1 className={styles.chantina}>{data.Matrett}</h1>
			<h1 className={styles.chantina}>{data.Pris}</h1>
			
        </div>
    )
}
