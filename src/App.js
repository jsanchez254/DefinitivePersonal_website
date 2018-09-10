import React, { Component } from 'react';
import './App.css';

//IMPORT SEMANTIC-UI
import {Container,Header, Divider, Grid} from "semantic-ui-react";

//IMPORT COMPONENTS
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Aboutme from "./components/aboutMe";
import Experience from "./components/experience";

//IMPORT CSS
import "./assets/css/navbar.css";
import "./assets/css/footer.css";
import "./assets/css/aboutMe.css";
import "./assets/css/skill.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <br/>
        <Container>
          <Aboutme/>
          <Experience/>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
