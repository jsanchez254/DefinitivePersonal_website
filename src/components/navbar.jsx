import React, { Component } from 'react';

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faBook, faBookReader, faProjectDiagram, faUsers, faBolt, faCode} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faBook, faBookReader, faProjectDiagram, faUsers, faBolt, faCode);

class navbar extends Component {
    render() { 
        return ( 
            <section className = "hero is-medium">
                <div className = "hero-head">
                    <nav className = "navbar">
                        <div className = "navbar-end">
                            <div className = "navbar-item">
                                <FontAwesomeIcon icon = "home" size = "1x" color = "black"/><span id = "underline">HOME</span>
                            </div>
                            <div className = "navbar-item">
                                <FontAwesomeIcon icon = "book" size = "1x" color = "black"/><span id = "underline">ABOUT ME</span>
                            </div>

                            <div className = "navbar-item has-dropdown is-hoverable" size = "2x" >
                                <div className = "navbar-link">
                                    <FontAwesomeIcon id = "changeBack" icon = "book-reader" size = "1x" color ="black"/><span id = "underline">EXPERIENCE</span>
                                </div>

                                <div className = "navbar-dropdown">
                                    <a className = "navbar-item">
                                    <FontAwesomeIcon icon = "bolt" size = "1x"/><h1>SKILLS</h1>
                                    </a>
                                    <a className = "navbar-item">
                                    <FontAwesomeIcon icon = "code" size = "1x"/><h1>WORK <br/>EXPERIENCE</h1>
                                    </a>
                                    <a className = "navbar-item">
                                    <FontAwesomeIcon icon = "users" size = "1x"/><h1>CLUBS AND <br/>AFFILIATIONS</h1>
                                    </a>
                                </div>
                            </div>

                            <div className = "navbar-item">
                                <FontAwesomeIcon icon = "project-diagram" size = "1x" color = "black"/><span id = "underline">PROJECTS</span>
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