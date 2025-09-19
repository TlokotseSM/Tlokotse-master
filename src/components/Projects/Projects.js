import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobBoard from "../../Assets/Projects/jobBoard.png";
import book from "../../Assets/Projects/book.png";
import citycycle from "../../Assets/Projects/citycycle.png";
import mobi from "../../Assets/Projects/mobi.png";
import voting from "../../Assets/Projects/voting.png";
import fincomply from "../../Assets/Projects/fincomply.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the full-stack applications and systems I've built recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Mobitronix Store - Featured Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobi}
              isBlog={false}
              title="Mobitronix Store"
              description="A comprehensive full-stack e-commerce platform built with React, Express.js, MongoDB, and Chakra UI. Features include product inventory management, user authentication, order processing, and secure payment integration. Designed for scalability and optimal user experience."
              ghLink="https://github.com/TlokotseSM/Mobitronix-Store"
              demoLink="https://mobitronix-store.onrender.com"
            />
          </Col>

          {/* FinComply */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fincomply}
              isBlog={false}
              title="FinComply"
              description="A sophisticated financial management and compliance platform built with NestJS. Handles global payroll processing, tax management, and compliance tracking across multiple countries and currencies. Features detailed financial analytics and ensures adherence to international regulations."
              ghLink="https://github.com/TlokotseSM/fincomply"
            />
          </Col>

          {/* CityCycle */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={citycycle}
              isBlog={false}
              title="CityCycle"
              description="A smart urban bike-sharing platform developed with Laravel. Manages complete bike-sharing operations including reservations, inventory tracking, hub coordination, and maintenance scheduling. Perfect for municipalities and fleet operators seeking efficient urban mobility solutions."
              ghLink="https://github.com/TlokotseSM/citycycle"
            />
          </Col>

          {/* Job Board App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobBoard}
              isBlog={false}
              title="Job Board Platform"
              description="A professional networking and job search platform built with Laravel. Features comprehensive job posting, application tracking, candidate matching, and networking capabilities. Designed to connect employers with qualified candidates efficiently."
              ghLink="https://github.com/TlokotseSM/job-board-app"
            />
          </Col>

          {/* Livewire Poll */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voting}
              isBlog={false}
              title="Interactive Voting System"
              description="A real-time voting and polling system built with Laravel and Livewire. Features live result updates, multiple poll types, user authentication, and comprehensive analytics. Perfect for organizations needing democratic decision-making tools."
              ghLink="https://github.com/TlokotseSM/livewire-poll"
            />
          </Col>

          {/* Book Review System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Review Platform"
              description="A comprehensive book rating and review system developed with Laravel. Features user reviews, rating algorithms, book recommendations, author profiles, and reading lists. Built for book enthusiasts to discover and share literary experiences."
              ghLink="https://github.com/TlokotseSM/book-review-system"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;