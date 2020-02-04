import React from 'react';

const ImageCard = props => {
	return (
		<div className="imgContainer">
			<img src={props.img}></img>
		</div>
	);
};

export default ImageCard;
