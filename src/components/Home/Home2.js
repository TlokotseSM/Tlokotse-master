import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/untitled_design.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my passion for programming during my studies and have been 
              continuously building my expertise ever since! 🚀
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> JavaScript, TypeScript, PHP, and Java. </b>
              </i>
              <br />
              <br />
              My areas of expertise include building scalable &nbsp;
              <i>
                <b className="purple">Full-Stack Web Applications</b> and working with
                <b className="purple"> IoT Systems and Data Analytics.</b>
              </i>
              <br />
              <br />
              I specialize in developing robust backend solutions with 
              <b className="purple"> Node.js, NestJS, and Laravel</b> while creating
              dynamic frontend experiences using
              <i>
                <b className="purple"> React, TypeScript</b>
              </i>
              &nbsp; and modern development practices.
              <br />
              <br />
              I'm passionate about creating <b className="purple">impactful solutions</b> that 
              solve real-world problems through innovative technology.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TlokotseSM"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Semakaleng_T"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="X (Twitter) Profile"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tlokotse-mogudi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/semakalengmogudi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram Profile"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;