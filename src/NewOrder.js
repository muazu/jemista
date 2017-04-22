import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import TextField from 'material-ui/TextField';
import between, { sizes } from './helpers/styles';

export default class NewOrder extends Component {

	componentWillMount() {
		this.props.handleMenuClick(1);
	}

	render() {
		return(
			<Wrapper>
				<PhoneNumBx>hi</PhoneNumBx>
			</Wrapper>
		)
	}
}


const Wrapper = styled.div`
	border: 5px solid goldenrod;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const PhoneNumBx = styled.div`
	border: 5px solid palevioletred;
	width: 33%;
	margin-top: -20%;

	@media (min-width: ${sizes.phone}) {
	    height: ${between('25px', '50px', sizes.phone, sizes.pad)};
	}

	@media (min-width: ${sizes.pad}) {
	    height: ${between('50px', '75px', sizes.pad, sizes.mac)};
	}

	@media (min-width: ${sizes.mac}) {
	    height: ${between('75px', '200px', sizes.mac, sizes.xl)};
	}

	@media (min-width: ${sizes.xl}) {
	    height: 200px;
	}





`;