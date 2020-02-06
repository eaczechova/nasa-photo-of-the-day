import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const ImageContainer = styled.div`
	width: 100%;
	@media (min-width: 700px) {
		width: 50%;
	}
`;

const MainImage = styled.img`
	width: 350px;
	margin-bottom: 40px;
`;

const ImageCard = props => {
	return (
		<ImageContainer>
			{props.img.media_type === 'image' ? (
				<MainImage src={props.img.url} alt=""></MainImage>
			) : (
				<ReactPlayer width="90%" className="video" url={props.img.url} playing />
			)}
		</ImageContainer>
	);
};

export default ImageCard;
