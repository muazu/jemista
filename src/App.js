import React, { Component } from 'react';
import styled from 'styled-components';
import Media from 'react-media'


import menu from './img/menu.png';
import userProfile from './img/user-profile.png';
import moreVert from './img/more-vert.png';

import Storefront from './Storefront';
import NewOrder from './NewOrder';
import CurrentOrders from './CurrentOrders';
import Analytics from './Analytics';
import Sidebar from './components/Sidebar';
import between, { sizes } from './helpers/styles';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

export default class App extends Component {

	state = {
		sidebar: {
			actions: [
				{ id: 1, name: 'New Order', primary: false, path: '/new-order' },
				{ id: 2, name: 'Current Orders', primary: false, path: '/current-orders' },
				{ id: 3, name: 'Analytics', primary: false, path: '/analytics' },
			]
		},
		activeMenuId: 0
	}

	handleMenuClick = (activeMenuId) => {
		this.setState( {activeMenuId} );
	};

	render() {

		const { sidebar } = this.state;

		return(
			<Router>
				<Wrapper>
					<Appbar>
						<AppItems>
							<Media query={`(max-width: ${sizes.pad})`} render={() => (
          						<AppbarImg src={menu} alt="menu"></AppbarImg>
        					)}/>
							<Logo>Jemista</Logo>
							<AppbarImg src={moreVert} alt="user"></AppbarImg>
							<AppbarImg src={userProfile} alt="user"></AppbarImg>
						</AppItems>
					</Appbar>
					<Media query={`(min-width: ${sizes.pad})`} render={() => (
          				<Sidebar 
							sidebarData={sidebar}
							handleMenuClick={this.handleMenuClick} 
							activeMenuId={this.state.activeMenuId}
						/>
        			)}/>
					<Main>
						<FeatureBar>Store Front</FeatureBar>
						<Route exact path="/" render={ () => (
							<Storefront 
								handleMenuClick={this.handleMenuClick}
							/>
							)} />
						<Route path="/new-order" render={ () => (
							<NewOrder 
								handleMenuClick={this.handleMenuClick}
							/>
							)} />
						<Route path="/current-orders" render={ () => (
							<CurrentOrders 
								handleMenuClick={this.handleMenuClick}
							/>
							)}/>
						<Route path="/Analytics" render={ () => (
							<Analytics 
								handleMenuClick={this.handleMenuClick}	
							/>
							)}/>
					</Main>
				</Wrapper>	
			</Router>	
		)
	}
}

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
`;
const Appbar = styled.div`
	position: fixed;
	left: 0;
	right:0;
	top: 0;
	padding: 10px 20px;
	z-index: 3;
	background-color: #0288d1;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	color: ghostwhite;
`;
const AppItems = styled.div`
	
	display: flex;
	align-items: center;
`;
const Logo = styled.div`
	
	font-size: 25px;
	flex: 1;
	text-align: center;
	@media (min-width: ${sizes.pad}) {
	    text-align: left;
	}
	
`;
const AppbarImg = styled.img`
	height: 35px;
	width: 35px;
	border-radius: 50%;
`;

const Main = styled.div`
	background-color: #cfd8dc;
	top:55px;
	flex: 1;
	position: relative;
	overflow: auto;
    z-index: 1;
    width: auto;

	@media (min-width: ${sizes.pad}) {
	    margin-left: 240px;
	}

`;
const FeatureBar = styled.div`
	background-color: #039be5;
	padding: 25px;
	color: ghostwhite;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;


