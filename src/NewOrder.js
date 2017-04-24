import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import TextField from 'material-ui/TextField';
import between, { sizes } from './helpers/styles';
import TextInput from './components/TextInput';

export default class NewOrder extends Component {

	componentWillMount() {
		this.props.handleMenuClick(1);
	}

	render() {
		return(
			<Wrapper>
				<PhoneNumBx>
					<TextInput label="Phone Number"/>
				</PhoneNumBx>
				<PhoneNumBx>
					<Input />
				</PhoneNumBx>
			</Wrapper>
		)
	}
}


const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	
`;


const PhoneNumBx = styled.div`
	border: 5px solid violet;
	width: 20%;
	margin: 2%;
	

`;
const Input = styled.input`
	width: 100%;
	height: 50px;
	box-sizing : border-box;
`;