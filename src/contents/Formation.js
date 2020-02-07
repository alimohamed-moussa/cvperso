import React, { Component } from 'react';
import Widecard from '../components/Widecard';


class Formations extends Component {

    state = {  }

    render() { 

        return ( 
            <div className="condiv">
                <h1 className="subtopic">Formation</h1>
                <Widecard title="Mastère Spécialisé Conseil et Ingenierie en Logistique et Innovation Organisationnelle" where="ESTIA" de="2012" à="2013"/>
                <Widecard title="Master 2 Professionnel Consultant et Chef de Projet en Organisation, Logistique et E-business" where="IAE de Bordeaux 4" de="2012" à="2013"/>
                <Widecard title="Master1 Logistique" where="Université de Cergy Pontoise" de="2010" à="2011"/>                
            </div>
         );
    }
}
 
export default Formations;