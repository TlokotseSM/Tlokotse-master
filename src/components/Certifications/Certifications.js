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
      pdfPath: "https://drive.google.com/file/d/1XGFhVOqAi7-QTFax19JkxFmcM40g-1zS/view?usp=sharing"
    },
    {
      title: "The Complete Java Certification Course",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1iwY7WausvXmaaPNneYysHbh-RwPcP2qM/view?usp=sharing"
    },
    {
      title: "One Week Python",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1oN9dnR_uRZ1ZL245YIgAk6uWOw1jK--_/view?usp=sharing"
    },
    {
      title: "The HTML & CSS Bootcamp 2025 Edition",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1OJP5xJdv_I8S8kfzhkliXmyvkEePpX-Q/view?usp=sharing"
    },
    {
      title: "SDLC - Software Development Life Cycle",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1TcZ06E2WvUUeUJ85HuBz6YUVvEdNGQlE/view?usp=sharing"
    },
    {
      title: "The Complete 2025 Software Testing Bootcamp",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1zR-eSbRL9ZTjh4_aZQfmzOIkRwoHmDV7/view?usp=sharing"
    },
    {
      title: "Agile Retrospective+Continuous Improvement+Kaizen with Scrum",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1hTwsU2DLM8kNOTpj-VJCgRRDyJSGhpfX/view?usp=sharing"
    },
    {
      title: "Business Analysis - Developing Requirements",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1sizY0TLqMkafB56tp9EJp7NpQkYGvAny/view?usp=sharing"
    },
    {
      title: "ChatGPT AI Ethics Ethical Intelligence for 2025",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1UrSkHiy-KAr7dZgiHfnzFAW-UM4H2Da9/view?usp=sharing"
    },
    {
      title: "Code Reviews for Secure, Clean, and Scalable Code",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/13ovPMS8ZEBH6An33SClnhSLl-5r7t7Iv/view?usp=sharing"
    },
    {
      title: "Continuous Improvement - Operational Excellence",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/18lcW5zRqgp2zupTz8iKjGIe4uTjrPFRm/view?usp=sharing"
    },
    {
      title: "Fundamentals of Software Design and Architecture Course",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1QeMvvrByScFhx_qI6dZsOW7x6INt7ZId/view?usp=sharing"
    },
    {
      title: "Introduction to Design Thinking",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1t5ZEo_StFYeLbqH6uFW5G5jfwI1PeULQ/view?usp=sharing"
    },
    {
      title: "Understand and Elicit Requirements with Business Analysis",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/135nsg1CbsgbHubcy3o8c4P9PR7BycA_b/view?usp=sharing"
    },
    {
      title: "Git & GitHub Mastery: Zero to Hero",
      issuer: "Udemy",
      pdfPath: "https://drive.google.com/file/d/1TacxhdSMex5lsgwkpMFBSKdpjf4rRcHh/view?usp=sharing"
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