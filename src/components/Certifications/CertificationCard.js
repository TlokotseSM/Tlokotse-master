import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaCertificate } from "react-icons/fa";
import { BsFileEarmarkPdf } from "react-icons/bs";

function CertificationCard({ title, issuer, pdfPath }) {
  return (
    <Card className="certification-card-view">
      <Card.Body>
        <div className="certification-icon-container">
          <FaCertificate className="certification-icon" />
        </div>
        
        <Card.Title className="certification-title">
          {title}
        </Card.Title>
        
        <Card.Subtitle className="mb-2 text-muted certification-issuer">
          <strong>{issuer}</strong>
        </Card.Subtitle>
        
        <div className="certification-actions">
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-button"
            aria-label={`View ${title} certificate`}
          >
            <BsFileEarmarkPdf style={{ marginRight: "8px" }} />
            View Certificate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;