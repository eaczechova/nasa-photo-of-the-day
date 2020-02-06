import React from 'react';
import styled from 'styled-components';

const DetailsCard = props => {
	const DetailsContainer = styled.div`
		width: 100%;
		@media (min-width: 700px) {
			width: 50%;
		}
	`;
	const InnerContainer = styled.div``;
	const HeadingTwo = styled.h2`
		width: 90%;
		text-transform: uppercase;
		font-size: 14px;
		letter-spacing: 7px;
		font-weight: 400;
		color: #bd993c;
		margin: 10px auto 0;
		padding: 0 5px 10px;
		border-bottom: 1px solid #bd993c;
	`;
	const Text = styled.p`
		font-size: 12px;
		padding: 20px 25px;
		margin: 0 auto;
		text-align: left;
		line-height: 22px;
	`;

	return (
		<DetailsContainer>
			<InnerContainer>
				<HeadingTwo>Title</HeadingTwo>
				<Text>{props.title}</Text>
			</InnerContainer>
			<InnerContainer>
				<HeadingTwo>Description</HeadingTwo>
				<Text>{props.description}</Text>
			</InnerContainer>
		</DetailsContainer>
	);
};

export default DetailsCard;
