import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu, Image, Grid, Container, Statistic, Segment, Header} from 'semantic-ui-react';



class App extends Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const { activeItem } = this.state;   
        
        var menuStyle = {
//            backgroundColor: "rgba(256,256,256,.2)"
        };
        
        var otherStyle = {
            fontSize: "10em"
        };
        
        var itemStyle = {
            color: "white"
        };
        
        var bodystyle = {
//            height: "100vh",
            width: "100vw"
        };
        
        var titleContainerStyle = {
            colore: "D50000"
        };
        
        var titleStyle = {
            textAlign: "center",
            fontSize: "8em",
            color: "white",
            fontFamily: "Gloria Hallelujah"
        };
        
        var firstNameStyle = {
            color: "#D50000"
        };
        
        var subtitleStyle = {
            textAlign: "center",
            color: "white",
            fontSize: "1.2em",
            fontFamily: "Gloria Hallelujah"
        };
            
        return (
            <div className="App" style={bodystyle}>
        <div className="myContainer">
            <Menu pointing secondary style={menuStyle}>
                        <Menu.Menu position='right'>
                <Menu.Item style={itemStyle} name='Works' active={activeItem === 'work'} onClick={this.handleItemClick} href="#sl-work">
                      Works
                </Menu.Item>

                <Menu.Item style={itemStyle} name='about' active={activeItem === 'reviews'} onClick={this.handleItemClick} href="#sl-about">
                      About
                </Menu.Item>

                <Menu.Item style={itemStyle} name='contact' active={activeItem === 'upcomingEvents'} onClick={this.handleItemClick} href="#sl-contact">
                      Contact
                </Menu.Item>
                </Menu.Menu>
            </Menu>    
        </div>
            
            <Container>
                <Grid.Row>
                    <Image src='./img/smoreley.png' size='medium' shape='circular' centered/>
                </Grid.Row>
                <div style={titleContainerStyle}>
                <Header as='h1' style={titleStyle}><span style={firstNameStyle}>Skyler</span>Belser</Header>
                <Header as='h2' style={subtitleStyle}>Gamer, Weber, Programming Extraordinaire</Header>
                </div>
            </Container>
            
            </div>
        );
    }
}

export default App;
