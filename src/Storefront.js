import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import addCircle from './img/add-circle.png';
import motorcycle from './img/motorcycle.png';
import pieChart from './img/pie-chart.png';

export default class Storefront extends Component {

	componentWillMount() {
		this.props.handleMenuClick(0);
	}

	render() {

		const { handleMenuClick } = this.props;

		return(
			<Wrapper>
				<QuickPanel>
					<Desc>Welcome to your StoreFront!</Desc>
					<QuickActionsBx>
						<QuickAction>
							<Link to="/new-order" onClick={ () => handleMenuClick(1) }>
								<Thumbnail color="#00b8d4"><ActionImg src={addCircle} alt="addCircle"></ActionImg></Thumbnail>
							</Link>
							<ActionDesc>Start a new order</ActionDesc>
						</QuickAction>
						<QuickAction>
							<Link to="/current-orders" onClick={ () => handleMenuClick(2) }>
								<Thumbnail color="#00bfa5"><ActionImg src={motorcycle} alt="motorcycle"></ActionImg></Thumbnail>
							</Link>
							<ActionDesc>Open and recent orders</ActionDesc>
						</QuickAction>
						<QuickAction>
							<Link to="/analytics" onClick={ () => handleMenuClick(3) }>
								<Thumbnail color="#c51162"><ActionImg src={pieChart} alt="pieChart"></ActionImg></Thumbnail>
							</Link>
							<ActionDesc>Analytics</ActionDesc>
						</QuickAction>
					</QuickActionsBx>
				</QuickPanel>
			</Wrapper>
		)
	}
}



const Wrapper = styled.div`
`;
const QuickPanel = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: white;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
const Desc = styled.div`	
	color: hsla(0, 0%, 0%, 0.54);
	font-size: 3vmin;
	padding: 40px;
`;
const QuickActionsBx = styled.div`
	display: flex;
	justify-content: space-around;
`;
const QuickAction = styled.div`
	padding-bottom: 2%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

`;
const Thumbnail = styled.div`
	border-radius: 50px;
	width: 80px;
	height: 80px; 
	background-color: ${props => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  	transition: all 200ms cubic-bezier(.25,.8,.25,1);
  	cursor: pointer;

	&:hover {
    transform: translateY(-5%);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;
const ActionDesc = styled.div`
	margin-top: 30px;
	color: rgba(0,0,0,0.87);
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
`;
const ActionImg = styled.img`
`;
