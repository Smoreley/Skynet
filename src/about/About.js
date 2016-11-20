import React, { Component } from 'react';
import './About.css';
import {Button, Menu, Image, Grid, Segment, Container, Header, Divider} from 'semantic-ui-react'

class About extends Component {
    render() {
        var bodyStyle = {
//            backgroundColor: "#3B305F",
            backgroundColor: "#323232",
//            backgroundColor: "#101010",
            width: "100vw",
            color: "white"
        };
        
        var titleStyle = {
            color: "White",
            position: "absolute",
            transform: "rotate(90deg)",
            textAlign: "left",
            top: "8%",
            right: "-1em",
            fontSize: "5em",
            padding: ".2em",
        };
        
        var headerStyle = {
            color: "#D50000"
        }
            
        return (
            <div className="about" style={bodyStyle}>
            <Header as="h1" style={titleStyle}>About</Header>
            
                <Container>
                    <Grid stackable columns={3} padded='horizontally' divided>            
                    <Grid.Row>
                        <Grid.Column>
                                <Header as='h1' style={{color: "#f1f1f1"}}>Who, me?</Header>
                          <Divider />
                                <p>Hi, I am Skyler.</p>
                        </Grid.Column>
            
                        <Grid.Column>
                                <Header as='h2' style={headerStyle}>Specialties</Header>
                                <Divider />
            
                                <p>Hi my name is Skyler. You don't know who I am yet but that is ok that is why you are reading the about section. In this section you will learn absolutely nothing. If I am good at my job that is. Now you might be thinking to your self, because why would you be conversing with anyone else on the essentail meanings of what I am about to say. Oh where was I or right, I was telling you how you are going to learn absolutely nothing from this about page. Certainly nothign about me. Though you might be coming to certain conclusions based of this text. Such as that I don't use spell checker because it is over-rated. English is a language of mistakes after all so why try to conform it to something it will never be. </p>
                        </Grid.Column>
            
                        <Grid.Column>
                            <Segment>
                                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
            
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default About;