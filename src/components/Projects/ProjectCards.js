import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* GitHub Button */}
        <Button 
          variant="primary" 
          href={props.ghLink} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${props.title} on GitHub`}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* Live Demo Button - Only show if demoLink exists and it's not a blog */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="success"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
            aria-label={`View live demo of ${props.title}`}
          >
            <CgWebsite /> &nbsp;
            {"Live Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;