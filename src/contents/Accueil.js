import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.jpg';
import Social from '../components/Social';
import Footer from '../components/Footer';


class Accueil extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="profile" />
                <ReactTypingEffect className="typingeffect" text={[
                    "Je m'appelle Ali MOHAMED",'je suis developpeur web', 'spécialisé sur NodeJS, ReactJS, WordPress']} speed={100} eraseDelay={700}/>
                <Social />
                <Footer />
            </div>
        )
    }
}


export default Accueil