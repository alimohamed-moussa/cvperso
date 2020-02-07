import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {

    render() {

        return (
            <div className="condiv">
                <h1 className="subtopic">Contact</h1>
                <h3>Email  :   alimohamed.moussa@gmail.com</h3>
                <h3>Tel:   :   +33 (0)6 63 99 69 06</h3>
                <Social />
            </div>
        )
    }
}
export default Contact