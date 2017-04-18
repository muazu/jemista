import React from 'react';
import styled from 'styled-components';

import addCircle from './img/add-circle.png';
import motorcycle from './img/motorcycle.png';
import pieChart from './img/pie-chart.png';

const Storefront = () => (
	<Wrapper>
		<QuickPanel>
			<Desc>Welcome to your StoreFront!</Desc>
			<QuickActionsBx>
				<QuickAction>
					<Thumbnail color="#00b8d4"><ActionImg src={addCircle} alt="motorcycle"></ActionImg></Thumbnail>
					<ActionDesc>Start a new order</ActionDesc>
				</QuickAction>
				<QuickAction>
					<Thumbnail color="#00bfa5"><ActionImg src={motorcycle} alt="motorcycle"></ActionImg></Thumbnail>
					<ActionDesc>Open and recent orders</ActionDesc>
				</QuickAction>
				<QuickAction>
					<Thumbnail color="#c51162"><ActionImg src={pieChart} alt="motorcycle"></ActionImg></Thumbnail>
					<ActionDesc>Analytics</ActionDesc>
				</QuickAction>
			</QuickActionsBx>
		</QuickPanel>
	</Wrapper>
)

export default Storefront;


const Wrapper = styled.div`
`;
const QuickPanel = styled.div`
	padding: 3%;
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: white;
	height: 30%;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
const Desc = styled.div`	
	color: hsla(0, 0%, 0%, 0.54);
	font-size: 3vmin;
	margin: 2% 2%;
`;
const QuickActionsBx = styled.div`
	
	display: flex;
	justify-content: space-around;
	padding: 2% 10%;
`;
const QuickAction = styled.div`
	
	padding: 2%;
	flex-basis: 33%;
`;
const Thumbnail = styled.div`
	height: 80px;
	width: 80px;
	border-radius: 50px;
	margin: 0 auto;
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
	margin: 15% 2% 0%; 2%;
	color: rgba(0,0,0,0.87);
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
`;
const ActionImg = styled.img`
`;
