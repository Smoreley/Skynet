import React, { Component } from 'react';
//import './Contact.css';
import {Button, Menu, Image, Grid, Card, Icon, Container, Segment, Header, Label, List, Divider} from 'semantic-ui-react';
import _ from 'lodash'

class Portfolio extends Component {    
    render() {
        var bodystyle = {
//            backgroundColor: "#3B305F",
            color: "black"
        };
        
        var col = {
            height: "100vh"
        }
        
        var titleStyle = {
            color: "White",
            position: "absolute",
            transform: "rotate(90deg)",
            textAlign: "left",
            top: "9%",
            right: "-1em",
            fontSize: "5em",
            padding: ".2em",
        };
        
        var colors = [
          'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
          'violet', 'purple', 'pink', 'brown', 'grey', 'black', 
        ];
            
        return (
            <div classNameName="App" style={bodystyle}>
                <Header as="h1" style={titleStyle}>Projects</Header>            
            
            
                <div className="slide">
                    <Container>
                        <Grid stackable columns={2}>
                            <Grid.Column>
                                <Segment raised >
                                <Label as='a' color='red' ribbon>Rails, Ruby, Facebook API, Bootstrap</Label>
                                <span><Header as="h1">Day Match</Header></span>
                                <Divider />
                                    <p>Web-App where users answer questions each day and get a match for the day. Questions and matches reset each day.</p>            
                                    <List as='ol'>
                                    <List.Item as='li' value='*'>Mobile First design.</List.Item>
                                    <List.Item as='li' value='*'>Facebook API integration for signup, login, and pulling infromation to fill out account information. </List.Item>
                                    <List.Item as='li' value='*'> Algthorithm that uses a point system to find the best match for each user.
                                    </List.Item>
                                    <List.Item as='li' value='*'>D3 graph that shows the similarities between two users.</List.Item>
                                    </List>
                                    <a href="https://github.com/Smoreley/Day-Match-Web-App"><Label attached='bottom right'><Icon name='github' size="large"/>Source</Label></a>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='img/comp/w10/bang-multi.PNG' size="medium" bordered centered/>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            
                <div className="slide">
                    <Container>
                        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                    </Container>
                </div>
            
            </div>
        );
    }
}

export default Portfolio;
