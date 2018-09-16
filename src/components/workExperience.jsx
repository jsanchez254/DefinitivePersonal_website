import React, { Component } from 'react';
import $ from "jquery";
import {Icon} from "semantic-ui-react";
import {less} from "../assets/js/accordion.js";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

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
                            HELLO
                        </div>
                        <div id = "appear">HELLO THERE</div>
                        <div className = "bottomjobBox" id = "bottom" onClick = {click("#bottom", "#appear")} onClick = {()=>less("less1")}>
                            <Icon name = "info circle"/><span id = "less1">More Info</span>
                        </div>
                    </div>

                    <div className = "column is-5 is-offset-2">
                        <div className = "jobBox">
                            HELLO
                        </div>
                        <div id = "appear1">HELLO THERE</div>
                        <div className = "bottomjobBox" id = "bottom1" onClick = {click("#bottom1", "#appear1")} onClick = {()=>less("less2")}>
                            <Icon name = "info circle"/><span id = "less2">More Info</span>
                        </div>
                    </div>
                    <div className = "column"></div>
                </div>
                <div className = "columns is">
                        <div className = "column is-5">
                            <div className = "jobBox">
                                HELLO
                            </div>
                            <div id = "appear2">HELLO THERE</div>
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