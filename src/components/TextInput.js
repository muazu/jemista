import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { phoneFormat, phoneUnformat } from '../helpers/func';

export default class TextInput extends Component {

	state = {
		focus: false,
		userTxt: "",
	}

	render() {
		
		const { 
			label, 
			fontSize,
			placeholder, 
			displayLabel } = this.props;

		return(
			<Wrapper>
				<Input 
					type="text"
					fontSize={this.props.fontSize} 
					placeholder={this.props.placeholder}
					onFocus={ () => this.setState( {focus: true} )}
					onBlur={ () => this.setState( {focus: false} )}
					onChange={ (event) => {
						this.setState( {userTxt: phoneUnformat(event.target.value)} )
						this.props.handleInputChg(phoneUnformat(event.target.value))
					}}
					value={phoneFormat(this.state.userTxt)}
				/>
				<Highlight active={this.state.focus}></Highlight>
				<Bar active={this.state.focus || this.state.userTxt}></Bar>
				<Label 
					displayLabel={this.props.displayLabel}
					fontSize={this.props.fontSize}
					active={this.state.focus || this.state.userTxt}>
					{label}
				</Label>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	
	display: flex;
	height: 100%;
	flex-direction: column;;
	position:relative; 
	box-sizing : border-box;
`;
const Input = styled.input`
	color:#999; 
	padding:10px 10px 10px 5px;
	display:block;
	height: 100%;
	border:none;
	background: none;
	box-sizing : border-box;
	border-bottom:1px solid #757575;
	font-size: ${props => props.fontSize ? props.fontSize : '18px'};

	&:focus {
		outline:none;
  	}

  	&::placeholder {
  		color:#999; 
  	}
`;
const Bar = styled.span`
	&:before, &:after {
		content:'';
		height:2px; 
		width:0;
		bottom:1px; 
		position:absolute;
		background:#5264AE;
		${props => props.active && css`
			width:50%;
		`}
		transition:0.2s ease all; 
	}

	&:before {
		left:50%;
	}

	&:after {
		right:50%;
	}
`;
const inputHighlighter = keyframes`
  from {
    background:#5264AE;
  }

  to {
    width:0; background:transparent;
  }
`;
const Highlight = styled.span`
	position:absolute;
	height:60%; 
	width:100%; 
	top:25%; 
	left:0;
	pointer-events:none;
	opacity:0.5;
	${props => props.active && css`
		animation: ${inputHighlighter} 0.3s ease;
	`}
`;
const Label = styled.label`
	display: ${props => props.displayLabel ? '' : 'none'};
	color:#999; 
	font-size: ${props => props.fontSize};
	font-weight:normal;
	position:absolute;
	pointer-events:none;
	left:5px;
	top:10px;
	transition:0.2s ease all;
	${props => props.active && css`
		top:-20px;
		font-size:14px;
		color:#5264AE;
	`}
`;
