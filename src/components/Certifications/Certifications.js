import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
import "./Certifications.css";

function Certifications() {
  const certificates = [
    {
      title: "PHP From Scratch Beginner To Advanced",
      issuer: "Udemy",
      pdfPath: "/certificates/PHP_From_Scratch.pdf"
    },
    {
      title: "The Complete Java Certification Course",
      issuer: "Udemy",
      pdfPath: "/certificates/Complete_Java_Certification.pdf"
    },
    {
      title: "One Week Python",
      issuer: "Udemy",
      pdfPath: "/certificates/One_Week_Python.pdf"
    },
    {
      title: "The HTML & CSS Bootcamp 2025 Edition",
      issuer: "Udemy",
      pdfPath: "/certificates/HTML_CSS_Bootcamp_2025.pdf"
    },
    {
      title: "SDLC - Software Development Life Cycle",
      issuer: "Udemy",
      pdfPath: "/certificates/SDLC_Certificate.pdf"
    },
    {
      title: "The Complete 2025 Software Testing Bootcamp",
      issuer: "Udemy",
      pdfPath: "/certificates/Software_Testing_Bootcamp_2025.pdf"
    },
    {
      title: "Agile Retrospective+Continuous Improvement+Kaizen with Scrum",
      issuer: "Udemy",
      pdfPath: "/certificates/Agile_Retrospective_Kaizen.pdf"
    },
    {
      title: "Business Analysis - Developing Requirements",
      issuer: "Udemy",
      pdfPath: "/certificates/Business_Analysis_Requirements.pdf"
    },
    {
      title: "ChatGPT AI Ethics Ethical Intelligence for 2025",
      issuer: "Udemy",
      pdfPath: "/certificates/ChatGPT_AI_Ethics.pdf"
    },
    {
      title: "Code Reviews for Secure, Clean, and Scalable Code",
      issuer: "Udemy",
      pdfPath: "/certificates/Code_Reviews_Secure_Clean.pdf"
    },
    {
      title: "Continuous Improvement - Operational Excellence",
      issuer: "Udemy",
      pdfPath: "/certificates/Continuous_Improvement_Excellence.pdf"
    },
    {
      title: "Fundamentals of Software Design and Architecture Course",
      issuer: "Udemy",
      pdfPath: "/certificates/Software_Design_Architecture.pdf"
    },
    {
      title: "Introduction to Design Thinking",
      issuer: "Udemy",
      pdfPath: "/certificates/Introduction_Design_Thinking.pdf"
    },
    {
      title: "Understand and Elicit Requirements with Business Analysis",
      issuer: "Udemy",
      pdfPath: "/certificates/Elicit_Requirements_Business_Analysis.pdf"
    },
    {
      title: "Git & GitHub Mastery: Zero to Hero",
      issuer: "Udemy",
      pdfPath: "/certificates/Git_GitHub_Mastery.pdf"
    }
  ];

  return (
    <Container fluid className="certification-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my technical certifications that showcase my continuous learning and professional development.
        </p>
        
        <div className="certification-category">
          <h2 className="certification-category-title">
            <strong className="purple">Technical Certifications</strong>
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {certificates.map((cert, index) => (
              <Col md={6} lg={4} className="certification-card" key={index}>
                <CertificationCard
                  title={cert.title}
                  issuer={cert.issuer}
                  pdfPath={cert.pdfPath}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Certifications;