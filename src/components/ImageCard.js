import React from 'react';
import ReactPlayer from 'react-player';

const ImageCard = props => {
	console.log(props.img.media_type === 'image');
	return (
		<div className="img-container">
			{props.img.media_type === 'image' ? (
				<img src={props.img.url} alt=""></img>
			) : (
				<ReactPlayer width="90%" className="video" url={props.img.url} playing />
			)}
		</div>
	);
};

export default ImageCard;
