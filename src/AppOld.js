import React, { Component } from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import './App.css';
import homeBill from './img/home-billboard.mp4';
import homeBillImg from './img/home-billboard.jpg';
import scrollHint from './img/scrollhint-arrow.png';


export default class AppOld extends Component {

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
            <Wrapper onScroll={this.handleScroll}>
                <AppBar>
                    <Logo>Jemista</Logo>
                    <NavItems>
                        <Item>How It works</Item>
                        <Item>Our Mission</Item>
                        <Item>About Us</Item>
                    </NavItems>
                    <Actions>
                        <ActionItem><FlatButton label="Sign In" labelStyle={{color: '#262d3f'}} /></ActionItem>
                        <ActionItem><RaisedButton label="Join Now" primary={true} /></ActionItem>
                    </Actions>
                </AppBar>
                <Hero>
                     <View>
                         <TitleBx><Title>Food delivery made easy.</Title></TitleBx>
                         <Scroll src={scrollHint} alt="scrollHint"></Scroll>
                     </View>
                    <VideoBx autoPlay>
                        <source src={homeBill} type="video/mp4" />
                    </VideoBx>
                </Hero>
                <div>
                    <div style={{border: '5px solid goldenrod', margin: '2%', padding: '2%'}}>
                        <StyledButton>Join Now</StyledButton>
                        <a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" href="#0">Button Text</a>
                        <a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib hot-pink" href="#0">Button Text</a>
                    </div>
                    <div style={{border: '5px solid goldenrod', margin: '2%', padding: '2%'}}></div>
                    <div style={{border: '5px solid goldenrod', margin: '2%', padding: '2%'}}>
                        <JoinNow>Join Now</JoinNow>
                    </div>
                </div>    
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    border: 5px solid goldenrod;
    min-height: 100vh;
    width: 100vw;
`;
const AppBar = styled.div`
    position: fixed;
    width: 96%;
    padding: 1% 1% 1% 3%;
    z-index: 2;
    display: flex;
    
`;
const Logo = styled.div`
    padding: 1%;
    font-weight: 700;
    font-size: 25px;
    color: #262d3f;
    align-self: baseline;
`;
const NavItems = styled.div`
    
    flex: 1;
    align-self: baseline;
    display: flex;
    justify-content: flex-start;
    color: #262d3f;
    font-size: 2vmin;
`;
const Item = styled.div`
    
    margin: 1%;
    padding: 2% 0% 2% 0%;
    flex-basis: 100px;
    text-align: center;

    &:hover {
        border-bottom: 3px solid #262d3f;
    }
`;
const Actions = styled.div`
    
    align-self: baseline;
    display: flex;
    justify-content: flex-end;
    min-width: 20%;
    padding: 2%;

`;
const ActionItem = styled.div`
    
    flex: 1;
    color: #262d3f;
    font-size: 2vmin;
    text-align: center;
    align-self: baseline;
    min-width: 100px
`;

const Hero = styled.div`
    
    height: 100vh;
    overflow: hidden;
`;
const View = styled.div`
    
    position: absolute;
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Scroll = styled.img`
    margin-bottom: 3%;
    border-radius: 50%;
    width: 3em;
    height: 3em; 
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    z-index: 1;
    cursor: pointer;
    transition: 200ms;
    
`;

const VideoBx = styled.video`
    objectFit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

const StyledButton = styled.button`
     padding: 12px 24px;
     font-size: 16px;
     border-radius: 40px;
     background: white;
     box-shadow: rgba(0,0,0,1) 0 1px 0;
     text-decoration: none;
`;
const JoinNow = styled.div`
    border: 5px solid aqua;
    background-color: palevioletred;
    width: 67px;
    padding: 0.96em 2.7em 0.9em;
    text-align: center;
    border-radius: 2em;
`;
