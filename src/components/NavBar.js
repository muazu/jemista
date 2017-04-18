import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

const NavBar = () => (
	<AppBar>
		<Logo>Jemista</Logo>
		<NavMenuBx>
			<NavItem>How it works</NavItem>
			<NavItem>Our Mission</NavItem>
			<NavItem>About Us</NavItem>
		</NavMenuBx>
		<ActionsBx>
			<StyledFlatButton 
				label="Sign In" 
				labelStyle={{color: '#262d3f', fontWeight: 300, fontSize: '2vmin', fontFamily: 'MG Maison Neue'}}>
			</StyledFlatButton>
			<PillButton>Join Now</PillButton>
		</ActionsBx>
	</AppBar>
)

export default NavBar;

const AppBar = styled.div` 	
	position: fixed;
	left: 0;
	right:0;
	z-index:1000;
	padding: 1%;
	display: flex;
`;

const Logo = styled.div`
	
	color: #262d3f;
	font-weight: 700;
	font-size: 25px;
	padding: 1%;
	margin: 1%;	
	align-self: baseline;
`;
const NavMenuBx = styled.div`	
	flex: 1;
	margin: 1%;
	display: flex;
	align-self: baseline;
`;
const NavItem = styled.div`	
	padding: 2% 0%;
	margin: 0% 2%;
	font-weight: 300;
	font-size: 2vmin;
	color: #262d3f;
	align-self: baseline;
	
	&:hover {
        border-bottom: 3px solid #262d3f;
    }
`;
const ActionsBx = styled.div`	
	margin: 1%;
	flex-basis: 20%;
	display: flex;
	justify-content: space-around;
	align-self: baseline;
`;

const StyledFlatButton = styled(FlatButton)`
	align-self: baseline;
`;

const PillButton = styled.div`
	padding: 6% 10%;
	font-weight: 300;
	font-size: 2vmin;
	color: #28d8d8;
	display: inline-block;
	min-width: 5.4em;
	border: 2px solid white;
	border-radius: 2em;
	background-color: white;
	text-align: center;
	align-self: baseline;
`;
