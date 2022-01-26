import React, {useState, useEffect} from 'react'
import createEnturClient from '@entur/sdk'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const Atb = () => {
    
    const service = createEnturClient({ clientName: 'ChaTechUB-MagicMirror' })

	const [stopName, setStopName] = useState('');
	const [timeList, setTimeList] = useState([]);

	const fetchDepartures = async () => {
		return await service.getDeparturesFromStopPlace(
			"NSR:StopPlace:43916",
			{ limit: 10 }
		);
	}
	
	//this function runs every 5 seconds. Is called in the useEffect hook
	//this function gets time tables for a selected stop by NSR ID
	const displayDepartures = list => {

		const data = list.map(item => {

			const publicCode = item.serviceJourney.journeyPattern.line.publicCode;

			// format time to hh:mm
			const formattedTime = new Date(item.expectedArrivalTime).toLocaleTimeString(
				navigator.language, {hour: '2-digit', minute:'2-digit'}
			);

			// difference between now and bus arrival time
			const minuteDiff = (
				new Date(item.expectedArrivalTime).getTime() - Date.now()
			) / (1000*60);

			// if arrival time is under 10 minutes, show remaining time in minutes
			if (minuteDiff < 10) {
				formattedTime = Math.round(minuteDiff) + " min";
				//if estimated arrival is in under half a minute, display time left as now
				if (Math.round(minuteDiff) <= 0) formattedTime = "Nå";
			}

			//info to set in data state for displaying in the list
			return {
				time: formattedTime,
				display: `${publicCode} ${item.destinationDisplay.frontText}`,
				id: item.serviceJourney.id,
				quay: item.quay.publicCode
			}
		});

		setTimeList(data.map(el => (
			<div className={styles.time} key={el.id} style={textColor(el.time)} >
                <img src='/bus-1052-hvit.svg'/>
            
                <div className={styles.departure}>
                    <h3>{el.display}</h3>
                    <h3>{el.time}</h3>
                </div>
               
			</div>
		)));
	}
	//this runs when the component loads (called in use effect hook )
	//it gets the stopname of the selected stop by NSR ID
	const getStopName = async () => {
		//fetches from entur api
		const stopPlace = await service.nsr.getStopPlace(
			"NSR:StopPlace:43916",
		)
		setStopName(stopPlace.name.value)
	}

	useEffect(() => {

		let departureList;

		const _fetch = async () => { departureList = await fetchDepartures() }
		const _display = () => { displayDepartures(departureList) }

		getStopName();

		(async () => {
			await _fetch();
			_display();
		})();

		let fetchIntervalId = setInterval(_fetch, 30000);
		// update departures per 5 sec
		let displayIntervalId = setInterval(_display, 5000);
		// free interval
		return () => { clearInterval(fetchIntervalId); clearInterval(displayIntervalId) };
	}, []);

	//this function returns a css value making text yellow if its five minutes or less left to arrival
	const textColor = (time) => {
		//if the time starts with nå(norwegian for now) the color should be yellow
		if (time.startsWith('Nå')){
			return {color:"#ebc354"}
		}
		//this is expected to be true if it says x min left and not just arrival time
		if (time[2] !== 'm'){
			return
		}
		//this checks if its five minutes or less left, indicating that the estimated arrival is soon
		if (parseInt(time[0]) < 6){
			return {color:"#ebc354"}
		}
	}

	return (
		<div className={styles.timeTable}>
			<h2 onClick={()=>{ router.push("/edit") }}>{stopName}</h2>
			{timeList}
		</div>
	)
}

export default Atb
