import React, { Component } from 'react';
import styled from 'styled-components';


import userProfile from './img/user-profile.png';
import moreVert from './img/more-vert.png';

import Storefront from './Storefront';
import NewOrder from './NewOrder';
import CurrentOrders from './CurrentOrders';
import Analytics from './Analytics';
import Sidebar from './components/Sidebar';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component {
	render() {

		const menuItems = [
		  { id: 1, name: 'Store Front', primary: true, path: '/' },
		  { id: 3, name: 'New Order', primary: false, path: '/new-order' },
		  { id: 4, name: 'Current Orders', primary: false, path: '/current-orders' },
		  { id: 5, name: 'Analytics', primary: false, path: '/analytics' },
		]

		return(
			<Router>
				<Wrapper>
					<Appbar>
						<AppItems>
							<Logo>Jemista</Logo>
							<AppbarImg src={moreVert} alt="user"></AppbarImg>
							<AppbarImg src={userProfile} alt="user"></AppbarImg>
						</AppItems>
					</Appbar>
					<Sidebar menuItems={menuItems} />
					<Main>
						<FeatureBar>Store Front</FeatureBar>
						<Route exact path="/" component={Storefront}/>
						<Route path="/new-order" component={NewOrder}/>
						<Route path="/current-orders" component={CurrentOrders}/>
						<Route path="/Analytics" component={Analytics}/>
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
	margin-left: 240px;
	position: relative;
	overflow: auto;
    z-index: 1;
    width: auto;
`;
const FeatureBar = styled.div`
	background-color: #039be5;
	padding: 25px;
	color: ghostwhite;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;


