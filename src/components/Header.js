import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.header``;

const HeaderTitle = styled.h1`
	background: #0d0d0d;
	color: #ffffff;
	margin: 0 auto;
	padding: 15px;
`;

const HeaderLogo = styled.img`
	width: 50px;
	height: 50px;
`;

const Header = () => {
	return (
		<HeaderComponent>
			<HeaderTitle>
				<HeaderLogo
					className="mx-auto"
					src="https://api.nasa.gov/assets/footer/img/favicon-192.png"
					alt="nasa logo"
				></HeaderLogo>
			</HeaderTitle>
		</HeaderComponent>
	);
};

export default Header;
