import React, { Component } from 'react';


class Widecards extends Component {


    state = {  }

    render() { 

        return ( 
            <div className="widecard">
                <div className="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.de} - {this.props.à}</h4>
                </div>
            </div>
         );
    }
}
 
export default Widecards;