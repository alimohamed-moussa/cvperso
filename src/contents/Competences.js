import React, { Component } from 'react'


class Skills extends Component {

    constructor(props){
        super(props);
        this.state={
        'competences':['REACT JS', 'NODEJS', 'PHP','DEVELOPPEMENT WORDPRESS (Developpement Back + Front)', 'HTML5/CSS3', 'JAVASCRIPT', 'BOOTSTRAP', 'MONGODB', 'MYSQL', 'POSTGRESQL']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Mes Compétences</h1>
                <ul>
                    {this.state.competences.map((value)=>{
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills