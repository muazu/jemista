import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';

export default class TextInput extends Component {

	state = {
		focus: false,
		userTxt: "",
	}

	render() {
		const { label } = this.props;
		return(
			<Wrapper>
				<Input 
					type="text" 
					onFocus={ () => this.setState( {focus: true} )}
					onBlur={ () => this.setState( {focus: false} )}
					onChange={ (event) => this.setState( {userTxt: event.target.value} )}
				/>
				<Highlight active={this.state.focus}></Highlight>
				<Bar active={this.state.focus || this.state.userTxt}></Bar>
				<Label 
					active={this.state.focus || this.state.userTxt}>
					{label}
				</Label>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	border: 5px solid gold;
	display: flex;
	flex-direction: column;;
	position:relative; 
	margin-bottom:45px;
`;
const Input = styled.input`
	font-size:18px;
	padding:10px 10px 10px 5px;
	display:block;
	
	border:none;
	box-sizing : border-box;
	border-bottom:1px solid #757575;

	&:focus {
		outline:none;
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
	color:#999; 
	font-size:18px;
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
