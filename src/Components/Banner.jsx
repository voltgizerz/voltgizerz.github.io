import React, { Component } from 'react'
import linkedin from '../Components/public/image/linkedin.png'
import twitter from '../Components/public/image/twitter.png'
import github from '../Components/public/image/github.png'
import mail from '../Components/public/image/mail.png'
import CV from '../Components/public/image/CV.png'

class Banner extends Component {
    render() {
        return (
            <section className="container-banner">
                <img id="profilepic" src="https://avatars.githubusercontent.com/u/54938467?s=400&u=224f8c7b42b3da22a074dc0124959773796fa9e8&v=4" width="170" height="170" alt="profilepic" />
                <h1>Felix Fernando Wijaya</h1>
                <h4>Software Engineer</h4>
                <h4><i>"A software engineer, I am major in Informatics at Atma Jaya Yogyakarta University with an interest in software development, especially in back-end processes. I love to create impactful software and learn about technology."</i></h4>
                <h5>Skills: Go, Python, Java, Node.js, Ruby on Rails, Node.js, MySQL, MongoDB, GraphQL, REST APIs, Git, Microservice, Docker.</h5>
                <a href="https://www.linkedin.com/in/felix-fernando-wijaya/"><img src={CV} width="40" height="40" alt="LinkedIn" /></a>
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


