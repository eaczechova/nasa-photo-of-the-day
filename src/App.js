import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Date from './components/Date';
import ImageCard from './components/ImageCard';
import DetailsCard from './components/DetailsCard';

function App() {
	const [data, setData] = useState([]);
	const effectCallback = () => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=douaG0rKg37sRpuRf4Ln1zY2LLs7gwIp7hLcl4rW'
			)
			.then(response => setData(response.data))
			.catch(error => console.log(error));
	};

	useEffect(effectCallback, []);
	console.log(data);
	if (data.length === 0) return <h3 className="loading">Loading...</h3>;
	return (
		<div className="App">
			<Header />
			<Date date={data.date} />
			<div className="layout-container">
				<ImageCard img={data.url} />
				<DetailsCard title={data.title} description={data.explanation} />
			</div>
		</div>
	);
}

export default App;
