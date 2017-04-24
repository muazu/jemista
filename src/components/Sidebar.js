import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import home from '../img/home.svg';

export default class Sidebar extends Component {

	render() {
		const { sidebarData, activeMenuId, handleMenuClick} = this.props;
		const actionItems = sidebarData.actions.map( item => {
			const isActive = item.id === activeMenuId;
			return (
				<StyledLink 
					key={item.id}
					to={item.path} 
					onClick={ () => handleMenuClick(item.id) }
				>
					<SidebarItem active={isActive} >
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
						<SidebarItem 
							primary={true}
							onClick={ () => handleMenuClick(0) }
						>
							<SidebarItemImg src={home} alt="home"></SidebarItemImg> 
							<SidebarName>Store Front</SidebarName>
						</SidebarItem>
					</StyledLink>
					<Label>Actions</Label>		
					{actionItems}
					<Label>Manage</Label>
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
	padding:  10px 20px;
	display: flex;
	align-items: center;
	&:hover {
		background-color: lightgrey;
  	}

	${props => props.primary && css`
    	border-bottom: 1px solid lightgrey;
    	padding: 20px 20px;
  	`}

	${props => props.active && css`
    	background-color: lightgrey;
    	border-right: 5px solid #039be5;
  	`}
`;
const SidebarItemImg = styled.img`
`;
const SidebarName = styled.div`
	display:block;
	padding: 4% 2% 2% 2%;
	margin-left: 5%;
	font-size: 0.87em;
`;
