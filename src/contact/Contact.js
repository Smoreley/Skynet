import React, { Component } from 'react';
import './Contact.css';
import {Button, Menu, Image, Grid, Container, Icon, List, Header} from 'semantic-ui-react';

class Contact extends Component {    
    render() {
        var bodyStyle = {
//            backgroundColor: "#3B305F",
            width: "100vw",
            textAlign: "center"
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
//            backgroundColor: "red"
        };
            
        return (
            <div className="contact" style={bodyStyle}>
            <Header as="h1" style={titleStyle}>Contact</Header>
                
                    <List>
                        <Grid stackable columns={4} padded='horizontally' divided>
                            <Grid.Column>
                                <List.Item>
                                    <a href="Skyler_Belser(2016).pdf"><span><Icon  name="file text outline" size='big'/></span></a>
                                </List.Item>
                            </Grid.Column>

                            <Grid.Column>
                                <List.Item>
                                    <a href="https://www.linkedin.com/in/skylerbelser?trk=hp-identity-photo"><span><Icon name="linkedin" size='big'/></span></a>
                                </List.Item>
                            </Grid.Column>

                            <Grid.Column>
                                <List.Item>
                                    <a href="https://github.com/Smoreley"><span><Icon name="github" size='big'/></span></a>
                                </List.Item>
                            </Grid.Column>

                            <Grid.Column>
                                <List.Item>
                                    <a href="#"><span><Icon name="twitter" size='big'/></span></a>
                                </List.Item>
                            </Grid.Column>
                        </Grid>
                    </List>
                
            </div>
        );
    }
}

export default Contact;
