import React, { Component } from 'react';
import {ExperienceItem1, ExperienceItem2, ExperienceItem3, ExperienceItem4, ExperienceItem5} from './experienceItem';



class Experiencecards extends Component {
    


    state = {  }

    render() { 

        return ( 
            <div className="widecard">
                <div className="compdet">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.de} - {this.props.à}</h4>
                    <h4><strong>Projet</strong>: </h4><p>{this.props.projet}</p>
                    <h4>Réalisations: </h4>
                    { (this.props.expe === "afpa" ) &&
                        <ExperienceItem1 />
                    } 
                    { (this.props.expe === "2MDEV" ) &&
                        <ExperienceItem2 />
                    } 
                    { (this.props.expe === "AZURTIM" ) &&
                        <ExperienceItem3 />
                    } 
                    { (this.props.expe === "Freelance" ) &&
                        <ExperienceItem4 />
                    }
                    { (this.props.expe === "Carrefour" ) &&
                        <ExperienceItem5 />
                    }
                    
                  
                 
                    
                    <h4><strong>Environnement technique</strong>: </h4><p>{this.props.techno}</p>
                    
                    
                </div>
            </div>
         );
    }
}
 
export default Experiencecards;