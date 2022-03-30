import React, { Component } from 'react'
import linkedin from '../Components/public/image/linkedin.png'
import twitter from '../Components/public/image/twitter.png'
import github from '../Components/public/image/github.png'
import mail from '../Components/public/image/mail.png'

class Banner extends Component {
render() {
return (
<section className="container-banner">
    <img id="profilepic"
        src="https://avatars.githubusercontent.com/u/54938467?s=400&u=224f8c7b42b3da22a074dc0124959773796fa9e8&v=4"
        width="170" height="170" alt="profilepic" />
    <h1>Felix Fernando Wijaya</h1>
    <h4>Software Engineer</h4>
    <h4>"A Software Engineer, Informatics graduated from Atma Jaya Yogyakarta University, passionate in software development,
        especially in back-end processes. Loves to create impactful software and learn about tech."</h4>
    <h4>Languages</h4>
    <h5>
        <img id="skill-go" src="https://img.shields.io/badge/-Go-black?style=flat-square&logo=Go" alt="go" />
        <img id="skill-ruby" src="https://img.shields.io/badge/-Ruby-black?style=flat-square&logo=ruby" alt="ruby" />
        <img id="skill-javascript"
            src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" alt="javascript" />
        <img id="skill-python" src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=python"
            alt="python" />
        <img id="skill-php" src="https://img.shields.io/badge/-PHP-black?style=flat-square&logo=php" alt="php" />
        <img id="skill-java" src="https://img.shields.io/badge/-Java-black?style=flat-square&logo=java" alt="java" />
        <img id="skill-node-js" src="https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js"
            alt="Node.js" />
    </h5>
    <h4>Frameworks</h4>
    <h5>
        <img id="skill-rails"
            src="https://img.shields.io/badge/-Ruby_on_Rails-black?style=flat-square&logo=ruby-on-rails" alt="rails" />
        <img id="skill-codeigniter"
            src="https://img.shields.io/badge/-CodeIgniter-black?style=flat-square&logo=codeigniter"
            alt="codeigniter" />
        <img id="skill-express" src="https://img.shields.io/badge/-Express.js-black?style=flat-square&logo=Express"
            alt="express" />
        <img id="skill-flask" src="https://img.shields.io/badge/-Flask-black?style=flat-square&logo=flask"
            alt="flask" />
        <img id="skill-chi" src="https://img.shields.io/badge/-Chi-black?style=flat-square&logo=chi" alt="chi" />
        <img id="skill-gqlgen" src="https://img.shields.io/badge/-Gqlgen-black?style=flat-square&logo=gql-gen"
            alt="gqlgen" />
    </h5>
    <h4>Databases</h4>
    <h5>
        <img id="skill-mysql" src="https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql"
            alt="mysql" />
        <img id="skill-javascript" src="https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb"
            alt="mongodb" />
    </h5>
    <h4>Knowledges</h4>
    <h5>
        <img id="skill-git" src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" alt="git" />
        <img id="skill-github" src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github"
            alt="git" />
        <img id="skill-bitbucket" src="https://img.shields.io/badge/-Bitbucket-black?style=flat-square&logo=bitbucket"
            alt="bitbucket" />
        <img id="skill-microservices"
            src="https://img.shields.io/badge/-Microservices-black?style=flat-square&logo=microservices"
            alt="microservices" />
        <img id="skill-rest" src="https://img.shields.io/badge/-REST_APIs-black?style=flat-square&logo=rest"
            alt="git" />
        <img id="skill-graphql" src="https://img.shields.io/badge/-GraphQL-black?style=flat-square&logo=graphql"
            alt="graphql" />
        <img id="skill-apollo"
            src="https://img.shields.io/badge/-Apollo%20GraphQL-black?style=flat-square&logo=apollo-graphql"
            alt="apollo-graphql" />
        <img id="skill-rabbitmq" src="https://img.shields.io/badge/-RabbitMQ-black?style=flat-square&logo=rabbitmq"
            alt="rabbitmq" />
        <img id="skill-docker" src="https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker"
            alt="docker" />
        <img id="skill-linux" src="https://img.shields.io/badge/-Linux-black?style=flat-square&logo=linux" alt="Linux" />
        <img id="skill-aws" src="https://img.shields.io/badge/-Amazon_Web_Service-black?style=flat-square&logo=amazon-aws" alt="aws" />
    </h5>
    <section id="skillheader" className="flex-project-container">
        <div><a href="https://www.linkedin.com/in/felix-fernando-wijaya/" target="_blank" rel="noopener noreferrer"><img
                    src={linkedin} width="80" height="80" alt="LinkedIn" /></a></div>
        <div><a href="https://twitter.com/felix_fernand0" target="_blank" rel="noopener noreferrer"><img src={twitter}
                    width="80" height="80" alt={"Twitter"} /></a></div>
        <div><a href="https://github.com/voltgizerz" target="_blank" rel="noopener noreferrer"><img src={github}
                    width="80" height="80" alt="Github" /></a></div>
        <div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=felix.fernandowi@gmail.com" target="_blank"
                rel="noopener noreferrer"><img src={mail} width="80" height="80" alt="Mail" /></a></div>
    </section>
</section>
)
}
}

export default Banner