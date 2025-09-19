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
      pdfPath: "/certificatesIMG/PHP_From_Scratch.png"
    },
    {
      title: "The Complete Java Certification Course",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Complete_Java_Certification.png"
    },
    {
      title: "One Week Python",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/One_Week_Python.jpg"
    },
    {
      title: "The HTML & CSS Bootcamp 2025 Edition",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/HTML_CSS_Bootcamp_2025.jpg"
    },
    {
      title: "SDLC - Software Development Life Cycle",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/SDLC_Certificate.png"
    },
    {
      title: "The Complete 2025 Software Testing Bootcamp",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Software_Testing_Bootcamp_2025.jpg"
    },
    {
      title: "Agile Retrospective+Continuous Improvement+Kaizen with Scrum",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Agile_Retrospective_Kaizen.jpg"
    },
    {
      title: "Business Analysis - Developing Requirements",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Business_Analysis_Requirements.png"
    },
    {
      title: "ChatGPT AI Ethics Ethical Intelligence for 2025",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/ChatGPT_AI_Ethics.png"
    },
    {
      title: "Code Reviews for Secure, Clean, and Scalable Code",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Code_Reviews_Secure_Clean.jpg"
    },
    {
      title: "Continuous Improvement - Operational Excellence",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Continuous_Improvement_Excellence.png"
    },
    {
      title: "Fundamentals of Software Design and Architecture Course",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Software_Design_Architecture.png"
    },
    {
      title: "Introduction to Design Thinking",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Introduction_Design_Thinking.jpg"
    },
    {
      title: "Understand and Elicit Requirements with Business Analysis",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Elicit_Requirements_Business_Analysis.jpg"
    },
    {
      title: "Git & GitHub Mastery: Zero to Hero",
      issuer: "Udemy",
      pdfPath: "/certificatesIMG/Git_GitHub_Mastery.png"
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