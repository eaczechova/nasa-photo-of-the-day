import React from 'react';

const DetailsCard = props => {
	return (
		<div className="details-wrapper">
			<div className="title">
				<h2>Title</h2>
				<p>{props.title}</p>
			</div>
			<div className="description">
				<h2>Description</h2>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default DetailsCard;
