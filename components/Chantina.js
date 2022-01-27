import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.scss'
import { collection, getDocs, query } from "firebase/firestore"
import { db } from './firebase-chantina';



export async function getServerSideProps(context) {

	let matretter = [];
	let priser = [];

	let q = query(collection(db, "Mat"));

	const snapshot = await getDocs(q);

	snapshot.forEach(doc => {
		const data = doc.data();
		matretter.push(data.Matrett);
		priser.push(data.Pris);
	});

    console.log(matretter);

	return {
		props: {
			matretter: matretter,
			priser: priser
		}
	}
}



export const Chantina = ({ matretter, priser }) => {
    
    

    //const [dagensLunsj, setdagensLunsj] = useState("Pizza")
    //const [dagensPris, setdagensPris] = useState("30,- pr stk")
    
    
    
    
    return (
        <div className={styles.chantinaParent}>
            <h1 className={styles.chantina}>Dagens Lunsj er</h1>
                 
        </div>
    )
}
