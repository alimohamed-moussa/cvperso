import React, { Component } from 'react'


class Realisations extends Component {

    constructor(props){
        super(props);
        this.state={
        'competences':['PHP','NODEJS', 'DEVELOPPEMENT WORDPRESS', 'HTML5/CSS3', 'JAVASCRIPT','REACT JS', 'BOOTSTRAP', 'MONGODB', 'MYSQL', 'POSTGRESQL']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Mes Réalisations</h1>
                <p>En cours de réalisation</p>
                
            </div>
        )
    }
}
export default Realisations;