import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Datetime from './components/Date';

function App() {
	const [changeDate, setChangeDate] = useState(0);
	function dateFunction() {
		let date = new Date();
		// if + or - button is clicked date gets updated
		// -1 for presentation purposes / time difference
		date.setDate(date.getDate() - 1 + changeDate);

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		if (month < 10) month = '0' + month;
		let day = date.getDate();
		if (day < 10) day = '0' + day;
		let fullDate = `${year}-${month}-${day}`;
		return fullDate;
	}

	let dateForApi = dateFunction();

	const [data, setData] = useState([]);
	const effectCallback = () => {
		axios
			.get(
				// `https://api.nasa.gov/planetary/apod?api_key=douaG0rKg37sRpuRf4Ln1zY2LLs7gwIp7hLcl4rW&date=2012-03-14`
				`https://api.nasa.gov/planetary/apod?api_key=douaG0rKg37sRpuRf4Ln1zY2LLs7gwIp7hLcl4rW&date=${dateForApi}`
			)
			.then(response => setData(response.data))
			.catch(error => console.log(error));
	};

	useEffect(effectCallback, [dateForApi]);

	const Loader = styled.div`
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 50px;
	`;

	const App = styled.div`
		text-align: center;
	`;

	if (data.length === 0) return <Loader>Loading...</Loader>;
	return (
		<App>
			<Header />
			<Datetime
				data={data}
				changeDateFunction={dateFunction}
				changeDate={changeDate}
				setChangeDate={setChangeDate}
			/>
		</App>
	);
}

export default App;
