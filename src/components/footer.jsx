import React, { Component } from 'react';

import {Divider, Container, Grid, Icon, Header} from "semantic-ui-react";

class footer extends Component {
    render() { 
        return (  
            <footer className = "footer1">
            <Container>
                <br/>
                <Header>CHECK ME OUT AT</Header>
                <Divider/>
                <Grid columns= "equal">
                    <Grid.Column/>
                    <Grid.Column width = {2}>
                            <Icon className = "big" id = "iconos" name = "github alternate"/>
                    </Grid.Column>
                    <Grid.Column width = {2}>
                            <Icon className = "big" id = "iconos" name = "linkedin"/>
                    </Grid.Column>
                    <Grid.Column width = {2}>
                            <Icon className = "big" id = "iconos" name = "envelope"/>
                    </Grid.Column>
                    <Grid.Column/>
                </Grid>
            </Container>
            </footer>
        );
    }
}
 
export default footer;