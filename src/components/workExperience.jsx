import React, { Component } from 'react';
import $ from "jquery";
import {Icon} from "semantic-ui-react";
import {less} from "../assets/js/accordion.js";

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
                <h1 className = "title">Work Experience:</h1>
                <div className = "columns">
                    <div className = "column is-5">
                        <div className = "jobBox">
                            HELLO
                        </div>
                        <div className = "bottomjobBox" id = "bottom" onClick = {click("#bottom", "#appear")}>
                            <Icon name = "arrow alternate circle down outline"/><span id = "less1">More Info</span>
                        </div>
                        <div id = "appear">HELLO THERE</div>
                    </div>

                    <div className = "column is-5 is-offset-2">
                        <div className = "jobBox">
                            HELLO
                        </div>
                        <div className = "bottomjobBox" id = "bottom1" onClick = {click("#bottom1", "#appear1")}>
                            <Icon name = "arrow alternate circle down outline"/>More Info
                        </div>
                        <div id = "appear1">HELLO THERE</div>
                    </div>
                    <div className = "column"></div>
                </div>
                <div className = "columns is-centered">
                    <div className = "column is-5">
                        <div className = "jobBox">
                            HELLO
                        </div>
                        <div className = "bottomjobBox" id = "bottom2" onClick = {click("#bottom2", "#appear2")}>
                            <Icon name = "arrow alternate circle down outline"/>More Info
                        </div>
                        <div id = "appear2">HELLO THERE</div>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default workEx;