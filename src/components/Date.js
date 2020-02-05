import React, { useState } from 'react';
import ImageCard from './ImageCard';
import DetailsCard from './DetailsCard';

const Datetime = props => {
	return (
		<div className="date">
			<div className="date-wrapper">
				<span
					className="minus"
					onClick={() => props.setChangeDate(props.changeDate - 1)}
				>
					-
				</span>
				<p>Date: {props.changeDateFunction()}</p>
				<span
					className="plus"
					onClick={() => props.setChangeDate(props.changeDate + 1)}
				>
					+
				</span>
			</div>
			<div className="layout-container">
				<ImageCard img={props.data} />
				<DetailsCard
					title={props.data.title}
					description={props.data.explanation}
				/>
			</div>
		</div>
	);
};

export default Datetime;
