import React from 'react';

export default function Side(){
    return (
        <div>
            <div className="close" onclick="">&#10006;</div>
        <div className="my-img">
            <img src="./images/prof.jpg" alt="Yash Wandhare" />
            <div className="name">Sourabh Varshney</div>
        </div>
        <div className="contact" >
            <a href="https://twitter.com/VarshneySourabh"><div className="insta"><i className="fab fa-twitter"></i></div></a>
            <a href="https://www.linkedin.com/in/sourabh-varshney-8324b5149/"><div className="insta"><i className="fab fa-linkedin"></i></div></a>
            <a href="https://github.com/sourabhvarshney111"><div className="insta"><i className="fab fa-github"></i></div></a>
            <a href="mailto:sourabhvarshney111@gmail.com"><div className="insta"><i className="far fa-envelope"></i></div></a>
        </div>
        <div id="links" className="links">
            <div><a id="home-but" name="but" href="#" onclick="closenav()">HOME</a></div>
            <div><a id="about-but" href="#about" name="but" onclick="closenav()">ABOUT</a></div>
            <div> <a id="proj-but" href="#projects" name="but" onclick="closenav()">PROJECTS</a></div>
            <div> <a id="resu-but" href="#resume" name="but" onclick="closenav()">RESUME</a></div>
            <div><a id="cont-but" href="#contact" name="but" onclick="closenav()">CONTACT</a></div>
        </div>
        </div>
    );
}