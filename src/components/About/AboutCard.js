import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I am <span className="purple">Tlokotse Mogudi</span>, 
            a passionate Full-Stack Developer from <span className="purple">Pretoria, South Africa</span>.
            <br />
            I specialize in building scalable and secure applications using modern technologies 
            like Node.js, NestJS, Laravel, React, and TypeScript.
            <br />
            Currently pursuing an Advanced Diploma in Computer Science at Tshwane University of Technology,
            while working as a Software Engineer at Internmatch South Africa.
            <br />
            I have experience in IoT development, data analysis, and full-stack web development.
            <br />
            <br />
            Apart from coding, here are some activities I'm passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Problem-solving & Algorithm Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Innovation & IoT Projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build solutions that create meaningful impact!"
          </p>
          <footer className="blockquote-footer">Tlokotse</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;