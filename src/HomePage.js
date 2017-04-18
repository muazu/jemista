import React, { Component } from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

import NavBar from './components/NavBar.js';
import homeBill from './img/home-billboard.mp4';
import scrollHint from './img/scrollhint-arrow.png';



export default class HomePage extends Component {

	state = {
	  availableHeight: 0,
	  scrollTop: 0
	}

	handleScroll = (event) => {
	  console.log(event.target.scrollTop);
	  this.setState({
	    scrollTop: event.target.scrollTop
	  })
	}

	render() {
		return(
			<Wrapper>
				<NavBar />
				<SplashView onScroll={this.handleScroll}>
					<Hero>
						<TitleBx><Title>Food delivery made easy.</Title></TitleBx>
						<ScrollBtn src={scrollHint} alt="scrollHint"></ScrollBtn>
					</Hero>
					<VideoBx autoPlay>
                        <source src={homeBill} type="video/mp4" />
                    </VideoBx>
				</SplashView>
				<PostView>
					<div style={{border: '5px solid goldenrod', padding: '2%', margin: '2%'}}>bo1</div>
					<div style={{border: '5px solid goldenrod', padding: '2%', margin: '2%'}}>bo1</div>
					<div style={{border: '5px solid goldenrod', padding: '2%', margin: '2%'}}>bo1</div>
				</PostView>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
`;

const SplashView = styled.div`	
	height: 100vh;
	overflowY: scroll;
	overflow: hidden;
`;
const Hero = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const VideoBx = styled.video`
    objectFit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
`;
const TitleBx = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	align-items: center;
`;
const Title = styled.div`
    font-family: GT Eesti Display;
    font-size: 8vmin;
    width: 30%;
    margin: 5%;
    color: #262d3f;
`;
const ScrollBtn = styled.img`
	width: 3em;
    height: 3em;
    border-radius: 50%;
    margin-bottom: 3%;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    z-index: 1;
    cursor: pointer;
    transition: 200ms;
`;
const PostView = styled.div`
`;