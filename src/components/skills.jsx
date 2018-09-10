import React, { Component } from 'react';

import {expand} from "../assets/js/skill.js";

class skills extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <h1 className = "title">Skills:</h1>
                <div className = "columns">
                    <div className = "column is-2">
                        <div className = "skill">
                            HTML
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div className = "skill">
                            CSS
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div className = "skill">
                            JavaScript
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div className = "skill">
                            Java
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div className = "skill">
                            C++
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand()} className = "skill">
                            MongoDB
                        </div>
                    </div>
                </div>

                <div className = "columns">
                    <div className = "column is-2 is-offset-1">
                        <div className = "skill">
                            Python
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div className = "skill">
                            Vue.JS
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div className = "skill">
                            NodeJS
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div className = "skill">
                            ReactJS
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div className = "skill">
                            SQL
                        </div>
                    </div>
                    <div className = "column is-2">

                    </div>
                </div>

                <br/>

                <span className = "percentageL">Click on skills to see percentage:</span>
                <div id = "contenedor">
                    <div id = "skillBox">
                        0%
                    </div>
                </div>   
                <br/>             
            </React.Fragment>
         );
    }
}
 
export default skills;