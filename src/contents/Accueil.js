import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.jpg';
import Social from '../components/Social';
import Footer from '../components/Footer';


class Accueil extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={[
                    "Je m'appelle Ali MOHAMED",'je suis developpeur web']} speed={100} eraseDelay={700}/>
                <Social />
                
            </div>
        )
    }
}


export default Accueil