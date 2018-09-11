import React, { Component } from 'react';

//IMPORT SEMANTIC-UI
import {Divider} from "semantic-ui-react";

//IMPORT COMPONENT
import Skills from "./skills";
import WorkEx from "./workExperience";

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
                        <p>
                        A hedgehog is any of the spiny mammals of the subfamily Erinaceinae, in the eulipotyphlan family 
                        Erinaceidae. There are seventeen species of hedgehog in five genera, found through parts of Europe,
                         Asia, and Africa, and in New Zealand by introduction. There are no hedgehogs native to Australia, 
                         and no living species native to the Americas (the extinct genus Amphechinus was once present in 
                         North America). Hedgehogs share distant ancestry with shrews (family Soricidae), with gymnures 
                         possibly being the intermediate link, and have changed little over the last 15 million years.[2]
                          Like many of the first mammals, they have adapted to a nocturnal way of life.[3] Hedgehogs' spiny protection 
                        resembles that of the unrelated porcupines, which are rodents, and echidnas, a type of monotreme.
                        </p>
                    </div>
                    <br/>
                    <Skills/>
                    <br/>
                    <WorkEx/>
                    <br/>
               </React.Fragment>
         );
    }
}
export default experience;