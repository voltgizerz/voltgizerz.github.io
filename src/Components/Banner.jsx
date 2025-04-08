import linkedin from '../Components/public/image/linkedin.png';
import x from '../Components/public/image/x.png';
import github from '../Components/public/image/git.png';
import mail from '../Components/public/image/mail.png';

// Configuration for email image and other images
const imageConfig = {
    linkedin: linkedin,
    x: x,
    github: github,
    mail: mail,
    profilePic: "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbG56ems3YW0xNjc1MzBmbDFqNXprczB3ciIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbH19"
};

// Helper function to generate random IDs
const generateRandomId = () => {
    return 'section-' + Math.random().toString(36).substr(2, 9);
};

// Profile Component
const Profile = () => (
    <div id={generateRandomId()} style={{ fontFamily: "'Poppins', sans-serif" }}>
        <img
            id="profile-pic"
            src={imageConfig.profilePic}
            width="170"
            height="170"
            alt="profile-pic"
        />
        <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>Felix Fernando Wijaya</h1>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "500", color: "#555" }}>Software Engineer</h3>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            "Hello! I'm Felix, a Back-End Software Engineer with over 4 years of hands-on experience, currently working at{" "}
            <a
                href="https://www.tokopedia.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "green", fontWeight: "bold", textDecoration: "none" }}
            >
                Tokopedia
            </a>. I  hold a degree from Atma Jaya Yogyakarta University with a strong interest and passion for software development, especially in back-end processes. I love to create something impactful and fight with logic."
        </p>
    </div>
);



// Skills Component
const Skills = ({ title, skills }) => (
    <div id={generateRandomId()}>
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
    <div id={generateRandomId()}>
        <h4>Let's Connect!</h4>
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
        x: "https://x.com/felix_fernand0",
        github: "https://github.com/voltgizerz",
        mail: "https://mail.google.com/mail/?view=cm&fs=1&to=felix.fernandowi@gmail.com"
    };
    return links[key];
};

const Banner = () => {
    const languages = [
        { src: "https://img.shields.io/badge/-Go-black?style=flat-square&logo=Go", alt: "Go" },
        { src: "https://img.shields.io/badge/-Python-black?style=flat-square&logo=python", alt: "Python" },
        { src: "https://img.shields.io/badge/-Ruby-black?style=flat-square&logo=ruby", alt: "Ruby" },
        { src: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript", alt: "JavaScript" },
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
        { src: "https://img.shields.io/badge/-Gqlgen-black?style=flat-square&logo=gql-gen", alt: "gqlgen" }
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
        { src: "https://img.shields.io/badge/-Microservices-black?style=flat-square&logo=microservices", alt: "Microservices"},
        { src: "https://img.shields.io/badge/-Concurrency-black?style=flat-square&logo=concurrency", alt: "Concurrency"},
        { src: "https://img.shields.io/badge/-REST_APIs-black?style=flat-square&logo=api", alt: "REST APIs" },
        { src: "https://img.shields.io/badge/-GraphQL-black?style=flat-square&logo=graphql", alt: "GraphQL" },
        { src: "https://img.shields.io/badge/-gRPC-black?style=flat-square&logo=gRPC", alt: "gRPC" },
        { src: "https://img.shields.io/badge/-Apollo%20GraphQL-black?style=flat-square&logo=apollo-graphql", alt: "Apollo GraphQL" },
        { src: "https://img.shields.io/badge/-RabbitMQ-black?style=flat-square&logo=rabbitmq", alt: "RabbitMQ" },
        { src: "https://img.shields.io/badge/-NSQ-black?style=flat-square&logo=nsq", alt: "NSQ" },
        { src: "https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker", alt: "Docker" },
        { src: "https://img.shields.io/badge/-Linux-black?style=flat-square&logo=linux", alt: "Linux" },
        { src: "https://img.shields.io/badge/-Amazon_Web_Service-black?style=flat-square&logo=amazon-aws", alt: "AWS" }
    ];

    return (
        <section className="container-banner">
            <Profile />
            <br />
            <Skills title="Programming Languages" skills={languages} />
            <Skills title="Frameworks & Libraries" skills={frameworks} />
            <Skills title="Databases" skills={databases} />
            <Skills title="Technical Knowledge & Tools" skills={knowledges} />
            <ContactLinks />
        </section>
    );
};

export default Banner;
