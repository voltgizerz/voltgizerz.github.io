import React from 'react';
import linkedin from '../Components/public/image/linkedin.png';
import twitter from '../Components/public/image/twitter.png';
import github from '../Components/public/image/github.png';
import mail from '../Components/public/image/mail.png';

// Configuration for email image and other images
const imageConfig = {
    linkedin: linkedin,
    twitter: twitter,
    github: github,
    mail: mail,
    profilePic: "https://avatars.githubusercontent.com/u/54938467?s=400&u=224f8c7b42b3da22a074dc0124959773796fa9e8&v=4"
};

// Profile Component
const Profile = () => (
    <div>
        <img
            id="profile-pic"
            src={imageConfig.profilePic}
            width="170"
            height="170"
            alt="profile-pic"
        />
        <h1>Felix Fernando Wijaya</h1>
        <h4>Software Engineer</h4>
        <h4>
            "Hi, I'm Felix currently working as a back-end software engineer at Tokopedia. I graduated from Atma Jaya Yogyakarta University with a strong interest and passion for software development, especially in the back-end processes. I love to create something impactful and fight with logic."
        </h4>
    </div>
);

// Skills Component
const Skills = ({ title, skills }) => (
    <div>
        <h4>{title}</h4>
        <h5>
            {skills.map(skill => (
                <img
                    key={skill.alt}
                    id={`skill-${skill.alt.toLowerCase()}`}
                    src={skill.src}
                    alt={skill.alt}
                />
            ))}
        </h5>
    </div>
);

// ContactLinks Component
const ContactLinks = () => (
    <div>
        <h4>Connect with Me</h4>
        <section id="connect-with-me" className="flex-project-container">
            {Object.keys(imageConfig).slice(0, 4).map(key => (
                <div key={key}>
                    <a
                        href={getLink(key)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={imageConfig[key]} width="80" height="80" alt={key} />
                    </a>
                </div>
            ))}
        </section>
    </div>
);

// Helper function to get link based on key
const getLink = (key) => {
    const links = {
        linkedin: "https://www.linkedin.com/in/felix-fernando-wijaya/",
        twitter: "https://twitter.com/felix_fernand0",
        github: "https://github.com/voltgizerz",
        mail: "https://mail.google.com/mail/?view=cm&fs=1&to=felix.fernandowi@gmail.com"
    };
    return links[key];
};

const Banner = () => {
    const languages = [
        { src: "https://img.shields.io/badge/-Go-black?style=flat-square&logo=Go", alt: "Go" },
        { src: "https://img.shields.io/badge/-Ruby-black?style=flat-square&logo=ruby", alt: "Ruby" },
        { src: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript", alt: "JavaScript" },
        { src: "https://img.shields.io/badge/-Python-black?style=flat-square&logo=python", alt: "Python" },
        { src: "https://img.shields.io/badge/-PHP-black?style=flat-square&logo=php", alt: "PHP" },
        { src: "https://img.shields.io/badge/-Java-black?style=flat-square&logo=openjdk", alt: "Java" },
        { src: "https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js", alt: "Node.js" }
    ];

    const frameworks = [
        { src: "https://img.shields.io/badge/-Ruby_on_Rails-black?style=flat-square&logo=ruby-on-rails", alt: "Rails" },
        { src: "https://img.shields.io/badge/-CodeIgniter-black?style=flat-square&logo=codeigniter", alt: "CodeIgniter" },
        { src: "https://img.shields.io/badge/-Laravel-black?style=flat-square&logo=laravel", alt: "Laravel" },
        { src: "https://img.shields.io/badge/-Express.js-black?style=flat-square&logo=express", alt: "Express" },
        { src: "https://img.shields.io/badge/-Flask-black?style=flat-square&logo=flask", alt: "Flask" },
        { src: "https://img.shields.io/badge/-Mux-black?style=flat-square&logo=mux", alt: "Mux" },
        { src: "https://img.shields.io/badge/-Gin-black?style=flat-square&logo=gin", alt: "Gin" },
        { src: "https://img.shields.io/badge/-Gqlgen-black?style=flat-square&logo=gql-gen", alt: "Gqlgen" }
    ];

    const databases = [
        { src: "https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql", alt: "MySQL" },
        { src: "https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql", alt: "PostgreSQL" },
        { src: "https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb", alt: "MongoDB" },
        { src: "https://img.shields.io/badge/-Redis-black?style=flat-square&logo=redis", alt: "Redis" }
    ];

    const knowledges = [
        { src: "https://img.shields.io/badge/-Git-black?style=flat-square&logo=git", alt: "Git" },
        { src: "https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github", alt: "GitHub" },
        { src: "https://img.shields.io/badge/-Bitbucket-black?style=flat-square&logo=bitbucket", alt: "Bitbucket" },
        { src: "https://img.shields.io/badge/-Microservices-black?style=flat-square&logo=microservices", alt: "Microservices" },
        { src: "https://img.shields.io/badge/-REST_APIs-black?style=flat-square&logo=rest", alt: "REST APIs" },
        { src: "https://img.shields.io/badge/-GraphQL-black?style=flat-square&logo=graphql", alt: "GraphQL" },
        { src: "https://img.shields.io/badge/-gRPC-black?style=flat-square&logo=GRPC", alt: "gRPC" },
        { src: "https://img.shields.io/badge/-Apollo%20GraphQL-black?style=flat-square&logo=apollo-graphql", alt: "Apollo GraphQL" },
        { src: "https://img.shields.io/badge/-RabbitMQ-black?style=flat-square&logo=rabbitmq", alt: "RabbitMQ" },
        { src: "https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker", alt: "Docker" },
        { src: "https://img.shields.io/badge/-Linux-black?style=flat-square&logo=linux", alt: "Linux" },
        { src: "https://img.shields.io/badge/-Amazon_Web_Service-black?style=flat-square&logo=amazon-aws", alt: "AWS" }
    ];

    return (
        <section className="container-banner">
            <Profile />
            <Skills title="Languages" skills={languages} />
            <Skills title="Frameworks" skills={frameworks} />
            <Skills title="Databases" skills={databases} />
            <Skills title="Knowledges" skills={knowledges} />
            <ContactLinks />
        </section>
    );
};

export default Banner;
