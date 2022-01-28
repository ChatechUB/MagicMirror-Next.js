import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.scss'
import axios from 'axios';


export const Chantina = ({ matretter, priser }) => {
    
	const [data, setData] = useState([])

    useEffect(() => {
		axios.get("https://api.chantina.no/getWeek")
		.then((res)=> {
			console.log(res.data[new Date().getDay() - 1].Pris);
			setData(res.data)
		})
	}, [])

    
    return (
        <div className={styles.chantinaParent}>
            <h1 className={styles.chantina}>Dagens Lunsj er</h1>
			<h1 className={styles.chantina}>{data[new Date().getDay() - 1].Matrett}</h1>
			<h1 className={styles.chantina}>{data[new Date().getDay() - 1].Pris}</h1>
			
        </div>
    )
}
