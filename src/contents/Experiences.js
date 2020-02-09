import React, { Component } from 'react';
import Experiencecard from '../components/Experiencecard';


class Experiences extends Component {


    render() { 

        return ( 
            <div className="condiv">
                <h1 className="subtopic">Experiences</h1>
                <Experiencecard 
                    title="Developpeur PHP - WordPress" 
                    where="AFPA" de="Juin 2019" à="Décembre 2019" 
                    projet="Conception et Developpement en méthodologie agile de la plateforme de pilotage du projet 'Le Village de l'AFPA'" 
                    expe="afpa"
                    techno="PHP, WordPress, JavaScript, JQuery, Ajax, Bootstrap4, HTML5, CSS3, API LeafLet, OpenStreetMap, ReactJS, Webpack" 
                
                />
                <Experiencecard 
                    title="Developpeur Web" 
                    where="2MDEV" de="2018" à="2019"
                    projet="Développement de projets web pour différents clients de l’agence"
                    expe="2MDEV"
                    techno="Node.js, Express.js, WebRTC, Socket IO, MongoDB, JavaScript, Bootstrap, JQuery, Mocha, EJS, WordPress"
                />
                <Experiencecard 
                    title="Developpeur Web" 
                    where="AZURTIM" de="2016" à="2018"
                    projet="Développement de projets web pour différents clients de l’agence"
                    expe="AZURTIM"
                    techno="Node.js, Express.js, MongoDB, JavaScript, Bootstrap, JQuery, Mocha, EJS, WordPress"
                
                />    
                 <Experiencecard 
                    title="Analyste programmeur" 
                    where="Freelance" de="2014" à="2016"
                    projet="Conception et Développement d’un logiciel de gestion de produits pour la grande distribution"
                    expe="Freelance"
                    techno="WinDev, WinDev Mobile, WordPress"
                
                /> 
                 <Experiencecard 
                    title="Manager Supply Chain" 
                    where="Carrefour Supply Chain France" de="2013" à="2014"
                    projet="Intervention dans le cadre de la gestion de l’approvisionnement alimentaire (Produits de Grande Consommation et Produits Frais Transformés) de l’ensemble des 221 hypermarchés du Groupe Carrefour en France et à Monaco"
                    expe="Carrefour"
                    techno="Microsoft Excel, Microsoft Access, VBA"
                
                />             
            </div>
         );
    }
}
 
export default Experiences;