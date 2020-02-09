import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import Social from '../components/Social';
import CV from '../document/CV.pdf';

class Contact extends Component {

    render() {

        return (
            <div className="condiv">
                <h1 className="subtopic">Contact</h1>
                <h3>Email  :   alimohamed.moussa@gmail.com</h3>
                <h3>Tel   :   +33 (0)6 63 99 69 06</h3>
                <div className="pdf-container">
                    <h4>Télécharger mon cv en pdf</h4>
                    <Link to={CV} target="_blank" className="pdf-icon" download><FaFilePdf /></Link>
                </div>
                <Social />
            </div>   
        )
    }
}
export default Contact