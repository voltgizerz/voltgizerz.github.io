import React, { Component } from 'react'
import profile from '../Components/public/image/profile.png';
import linkedin from '../Components/public/image/linkedin.png'
import twitter from '../Components/public/image/twitter.png'
import github from '../Components/public/image/github.png'
import mail from '../Components/public/image/mail.png'
import CV from '../Components/public/image/CV.png'

class Banner extends Component {
    render() {
        return (
            <section className="container-banner">
                <img id="profilepic" src={profile} width="170" height="170" alt="profilepic" />
                <h1>Felix Fernando Wijaya</h1>
                <h4>Undergratuate Student</h4>
                <h4><i>"Third year Information Technologist Undergraduate Student at Atma Jaya Yogyakarta University, interested to persue career in Back End Web Development, Mobile Development, Corporate Problem Solving and Creative Thinking"</i></h4>
                <a href="https://www.cv-template.com/en/builder/cv/1914306/download"><img src={CV} width="40" height="40" alt="LinkedIn" /></a>
                <section id="skillheader" className="flex-project-container">
                    <div><a href="https://www.linkedin.com/in/felix-fernando-wijaya/" target="_blank"
                        rel="noopener noreferrer"><img src={linkedin} width="80" height="80" alt="LinkedIn" /></a></div>
                    <div><a href="https://twitter.com/felix_fernand0" target="_blank"
                        rel="noopener noreferrer"><img src={twitter} width="80" height="80" alt={"Twitter"} /></a></div>
                    <div><a href="https://github.com/voltgizerz" target="_blank"
                        rel="noopener noreferrer"><img src={github} width="80" height="80" alt="Github" /></a></div>
                    <div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=felix.asui@gmail.com" target="_blank"
                        rel="noopener noreferrer"><img src={mail} width="80" height="80" alt="Mail" /></a></div>
                </section>
            </section>

        )
    }
}

export default Banner


