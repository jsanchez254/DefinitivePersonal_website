import React, { Component } from 'react';
import $ from "jquery";
import {Icon} from "semantic-ui-react";
import {less} from "../assets/js/accordion.js";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

//IMPORT IMAGES
import ucmerced from "../assets/img/ucmerced.png";
import hackmerced from "../assets/img/hackmerced.png";
import acm from "../assets/img/acm.jpg";
import media from "../assets/img/mediaCats.jpg";

library.add(faCode);

function click(bottom, appear){
$(document).ready(function(){
    $(bottom).click(function(){
        $(appear).slideToggle("fast");
    })
});
}
class workEx extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1 className = "title"><FontAwesomeIcon icon = "code" size = "1x" color = "black"/> Work Experience:</h1>
                <div className = "columns">
                    <div className = "column is-5">
                        <div className = "jobBox">
                            <span class = "jobtitle" >Web-Assistant</span>
                            <img  class =  "imageJobs" src = {ucmerced}/>
                        </div>
                        <div id = "appear">
                            <p class = "positionLoc">Office of Research and Economic Development  <br/>October 2017 – May 2018 </p>
                            
                            <ul>
                                <li> • Updated 4 different school websites with new content, using HTML, CSS and JavaScript. </li>
                                <li> • Assisted on updating 2 websites to have a better User Interface, using Drupal, CSS and HTML. </li>  
                            </ul>
                        </div>
                        <div className = "bottomjobBox" id = "bottom" onClick = {click("#bottom", "#appear")} onClick = {()=>less("less1")}>
                            <Icon name = "info circle"/><span id = "less1">More Info</span>
                        </div>                        
                    </div>

                    <div className = "column is-5 is-offset-2">
                        <div className = "jobBox">
                            <span class = "jobtitle">Full-Stack Developer</span>
                            <img  class =  "imageJobs" src = {ucmerced}/>
                        </div>
                        <div id = "appear1">
                            <p class = "positionLoc">Research Position, Professor Angelo Kirylov <br/> August 2018 – Present </p>
                            <ul>
                                <li> • Currently developing website that will be used for teaching and grading students in selected CS courses at UC Merced. Website will include a C++ compiler with code and lecture slides that come from a python server using RESTful APIs, all with the goal to create a learning environment for students.</li>
                                <li>  • Website is being built with HTML, CSS, JavaScript, Vue.js, Python, SQL, and others like Bulma, Semantic UI, and Axios.</li>
                            </ul>
                        </div>
                        <div className = "bottomjobBox" id = "bottom1" onClick = {click("#bottom1", "#appear1")} onClick = {()=>less("less2")}>
                            <Icon name = "info circle"/><span id = "less2">More Info</span>
                        </div>
                    </div>
                    <div className = "column"></div>
                </div>
                <div className = "columns is">
                        <div className = "column is-5">
                            <div className = "jobBox">
                                <span class = "jobtitle">Web-Assistant</span>
                                <img class = "imageJobs" src = {media}/>
                            </div>
                            <div id = "appear2">
                                                            
                            </div>
                            <div className = "bottomjobBox" id = "bottom2" onClick = {click("#bottom2", "#appear2")} onClick = {()=>less("less3")}>
                                <Icon name = "info circle"/><span id = "less1"><span id = "less3">More Info</span></span>
                            </div>
                        </div>

                        <div className = "column is-5 is-offset-2">
                            <div className = "jobBox">
                                HELLO
                            </div>
                            <div id = "appear3">HELLO THERE</div>
                            <div className = "bottomjobBox" id = "bottom3" onClick = {click("#bottom3", "#appear3")} onClick = {()=>less("less4")}>
                                <Icon name = "info circle"/><span id = "less4">More Info</span>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
          );
    }
}
 
export default workEx;