import React from 'react';
import ImageCard from './ImageCard';
import DetailsCard from './DetailsCard';
import styled from 'styled-components';

const Datetime = props => {
	const Container = styled.div``;
	const DateWrapper = styled.div`
		display: flex;
		justify-content: center;
		text-transform: uppercase;
		font-size: 12px;
		color: #b8babc;
		letter-spacing: 3px;
		padding: 8px 0;
		margin: 20px auto;
		width: 100%;
	`;

	const PlusMinus = styled.span`
		display: inline-block;
		// width: 15px;
		// height: 15px;
		background: #f2f2f2;
		margin: -2px 7px;
		padding: 3px 4px 4px 5px;
		border: 1px solid #ddd;
		border-radius: 4px;
		text-align: center;
		cursor: pointer;
		transition: all 0.7s ease-in-out;

		&:hover {
			border: 1px solid #bd993c;
			color: #bd993c;
		}
	`;

	const Date = styled.p``;
	const InnerContainer = styled.div`
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 50px;
		@media (min-width: 700px) {
			flex-direction: row;
		}
	`;

	return (
		<Container>
			<DateWrapper>
				<PlusMinus
					className="minus"
					onClick={() => props.setChangeDate(props.changeDate - 1)}
				>
					-
				</PlusMinus>
				<Date>Date: {props.changeDateFunction()}</Date>
				<PlusMinus
					className="plus"
					onClick={() => props.setChangeDate(props.changeDate + 1)}
				>
					+
				</PlusMinus>
			</DateWrapper>
			<InnerContainer>
				<ImageCard img={props.data} />
				<DetailsCard
					title={props.data.title}
					description={props.data.explanation}
				/>
			</InnerContainer>
		</Container>
	);
};

export default Datetime;
