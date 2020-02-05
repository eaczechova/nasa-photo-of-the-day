import React from 'react';

const ImageCard = props => {
	return (
		<div className="img-container">
			<img src={props.img}></img>
		</div>
	);
};

export default ImageCard;
