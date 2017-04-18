import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import home from '../img/home.svg';

export default class Sidebar extends Component {
	render() {
		const { menuItems } = this.props;
		const sidebarItems = menuItems.map((item, index) => {
			return (
				<StyledLink to={item.path} key={item.id}>
					<SidebarItem>
						<SidebarItemImg src={home} alt="home"></SidebarItemImg> 
						<SidebarName>{item.name}</SidebarName>
					</SidebarItem>
				</StyledLink>
			)
		})


		return(
			<Wrapper>
				<List>
					<StyledLink to="/">
						<SidebarItem primary>
							<SidebarItemImg src={home} alt="home"></SidebarItemImg> 
							<SidebarName>Store Front</SidebarName>
						</SidebarItem>
					</StyledLink>
					<Label>Actions</Label>		
					{sidebarItems}
				</List>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	background-color: #fafafa;
	top:55px;
    left:0;
    height: 100vh;
	width: 240px;
	position: fixed;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	z-index: 2;
`;
const Label = styled.div`
	padding: 20px 20px 10px 25px;
	font-weight: 300;
	font-size: 0.9em;
	color: grey;

`;
const List = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
`;
const StyledLink = styled(Link)`
  	color: ghostwhite;
  	text-decoration: none;
`;
const SidebarItem = styled.li`
	color: #039be5;
	border-bottom: ${props => props.primary ? '1px solid lightgrey' : ''};
	padding: ${props => props.primary ? '20px 20px' : '10px 20px'};
	display: flex;
	align-items: center;
	&:hover {
		background-color: lightgrey;
  	}
`;
const SidebarItemImg = styled.img`
`;
const SidebarName = styled.div`
	padding: 2%;
	margin-left: 5%;
`;


