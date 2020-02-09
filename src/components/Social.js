import React, { Component } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';

class Social extends Component {

    render() {

        return (
            <div className="social">
                <a href="https://github.com/alimohamed-moussa?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/ali-m-35581949/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                <a href="https://www.youtube.com/channel/UCK00E8n3hsy6H8xqZaK2QEg" target="_blank" rel="noopener noreferrer" className="social-icon"><FaYoutube /></a>
                <a href="https://www.udemy.com/user/ali-mohamed-moussa/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaChalkboardTeacher /></a>
            </div>
            
        )
    }
}
export default Social