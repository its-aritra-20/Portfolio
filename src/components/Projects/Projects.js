import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import underwaterImage from "../../Assets/Projects/underwaterImage.png";
import brainTumorImage from "../../Assets/Projects/brainTumorImage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={underwaterImage}
              isBlog={false}
              title="Underwater Image Enhancer"
              description="An image enhancement model made using a CNN-based U-NET architecture, trained on paired underwater and filtered images, leveraging TensorFlow/Keras and evaluated using PSNR, SSIM, and MSE metrics."
              ghLink="https://github.com/its-aritra-20/Under-Water-Image-Detection"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainTumorImage}
              isBlog={false}
              title="Brain Tumor Detection"
              description="A deep learning-based project that detects brain tumors from MRI scans using a Convolutional Neural Network (CNN) for accurate and efficient diagnosis."
              ghLink="https://github.com/its-aritra-20/Brain-Tumor-Detection"
              
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
