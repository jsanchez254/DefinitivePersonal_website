import React, { Component } from 'react';
import $ from "jquery";
import {Icon} from "semantic-ui-react";
import {less} from "../assets/js/accordion.js";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

library.add(faUsers);

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
                <h1 className = "title"><FontAwesomeIcon icon = "users" size = "1x" color = "black"/> Clubs and Affiliations:</h1>
                <div className = "columns">
                    <div className = "column is-5">
                        <div className = "jobBox">
                            HELLO
                        </div>
                        <div id = "appear4">HELLO THERE</div>
                        <div className = "bottomjobBox" id = "bottom4" onClick = {click("#bottom4", "#appear4")} onClick = {()=>less("less4")}>
                            <Icon name = "info circle"/><span id = "less4">More Info</span>
                        </div>
                    </div>

                    <div className = "column is-5 is-offset-2">
                        <div className = "jobBox">
                            HELLO
                        </div>
                        <div id = "appear5">HELLO THERE</div>
                        <div className = "bottomjobBox" id = "bottom5" onClick = {click("#bottom5", "#appear5")} onClick = {()=>less("less5")}>
                            <Icon name = "info circle"/><span id = "less5">More Info</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default workEx;