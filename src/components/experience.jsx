import React, { Component } from 'react';

//IMPORT SEMANTIC-UI
import {Divider} from "semantic-ui-react";

//IMPORT COMPONENT
import Skills from "./skills";
import WorkEx from "./workExperience";
import Clubs from "./clubs";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";

library.add(faBookReader);

class experience extends Component {
    render() { 
        return ( 
                <React.Fragment>
                    <div>
                        <center className = "about"><FontAwesomeIcon icon = "book-reader"/>

                            <br/>
                            Experience
                        </center>
                        <Divider/>
                    </div>
                    <br/>
                    <Skills/>
                    <br/>
                    <WorkEx/>
                    <br/>
                    <Clubs/>
                    <br/>
               </React.Fragment>
         );
    }
}
export default experience;