import React, { Component } from 'react';

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faBook, faBookReader, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faBook, faBookReader, faProjectDiagram);

class navbar extends Component {
    render() { 
        return ( 
            <section className = "hero is-medium">
                <div className = "hero-head">
                    <nav className = "navbar">
                        <div className = "navbar-end">
                            <div className = "navbar-item" onClick = {this.props.onAlarm}>
                                <FontAwesomeIcon icon = "home" size = "1x" color = "white"/><span id = "underline">HOME</span>
                            </div>
                            <div className = "navbar-item" onClick = {this.props.onAlarm}>
                                <FontAwesomeIcon icon = "book" size = "1x" color = "white"/><span id = "underline">ABOUT ME</span>
                            </div>
                            <div className = "navbar-item" onClick = {this.props.onAlarm}>
                                <FontAwesomeIcon icon = "book-reader" size = "1x" color = "white"/><span id = "underline">EXPERIENCE</span>
                            </div>
                            <div className = "navbar-item" onClick = {this.props.onAlarm}>
                                <FontAwesomeIcon icon = "project-diagram" size = "1x" color = "white"/><span id = "underline">PROJECTS</span>
                            </div>    
                        </div>
                    </nav>
                </div>
                <div className = "hero-body">
                    <center className = "title1">Jesus Sanchez</center>
                </div>
            </section>
         );
    }
}
 
export default navbar;