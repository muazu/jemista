import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import TextField from 'material-ui/TextField';
import between, { sizes } from './helpers/styles';
import TextInput from './components/TextInput';
import CustomerCard from './components/CustomerCard';

export default class NewOrder extends Component {

	constructor() {
		super();
		this.renderResult = this.renderResult.bind(this);
	}

	componentWillMount() {
		this.props.handleMenuClick(1);
	}

	renderResult () {
		if(this.props.customer) {
			return (<CustomerCard customer={this.props.customer}/>)
		} else if(!this.props.customer && this.props.isSearched) {
			return (<p>User not found</p>)
		} else {
			return (<p>Start new search!</p>)
		}
	}

	render() {

		const { customer, isSearched } = this.props;

		return(
			<Wrapper>
				<InputBx>
					<TextInput
						fontSize="48px"
						placeholder=""
						displayLabel={true}
						label="Enter Phone Number"
						handleInputChg={this.props.handleInputChg}
					/>
				</InputBx>
				<ResultBx>
					{this.renderResult()}
				</ResultBx>
			</Wrapper>
		)
	}
}


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1%;
`;

const InputBx = styled.div`
	margin-top: 5%;
	width: 50%;
	height: 75px;
`;
const ResultBx = styled.div`
	border: 5px solid goldenrod;
	margin-top: 5%;
	width: 50%;
`;
