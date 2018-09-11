import React, { Component } from 'react';

import {expand} from "../assets/js/skill.js";

class skills extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <h1 className = "title">Skills:</h1>
                <div className = "columns">
                    <div className = "column is-2">
                        <div onClick = {()=>expand("html")} className = "skill html">
                            HTML
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("css")} className = "skill css">
                            CSS
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("javaScript")} className = "skill javaScript">
                            JavaScript
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("java")} className = "skill java">
                            Java
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("C++")} className = "skill Cpp">
                            C++
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("mongo")} className = "skill mongo">
                            MongoDB
                        </div>
                    </div>
                </div>

                <div className = "columns">
                    <div className = "column is-2">
                        <div onClick = {()=>expand("C")} className = "skill C">
                            C
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("python")} className = "skill python">
                            Python
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("VueJS")} className = "skill vuejs">
                            Vue.JS
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("NodeJS")} className = "skill nodejs">
                            NodeJS
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("ReactJS")} className = "skill reactjs">
                            ReactJS
                        </div>
                    </div>
                    <div className = "column is-2">
                        <div onClick = {()=>expand("SQL")} className = "skill sql">
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