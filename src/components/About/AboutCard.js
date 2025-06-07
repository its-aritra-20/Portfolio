import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import DeloitteLogo from "../../Assets/Company/Deloitte-USI.png";
import LTIMindtreeLogo from "../../Assets/Company/LTIMindtree.png"; 
import CapgeminiLogo from "../../Assets/Company/Capgemini.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aritra Chakraborty </span>
            from <span className="purple">Kolkata, India.</span>
            <br />
            I currently have three job offers:
            <br />
            <img
              src={DeloitteLogo}
              alt="Deloitte Logo"
              height="50"
              style={{ marginRight: "8px" }}
            />
            USI Analyst Trainee
            <br />
            <img
              src={LTIMindtreeLogo}
              alt="LTIMindtree Logo"
              height="40"
              style={{ marginRight: "8px" }}
            />
            Graduate Engineer Trainee
            <br />
            <img
              src={CapgeminiLogo}
              alt="Capgemini Logo"
              height="55"
              style={{ marginRight: "8px" }}
            />
            Analyst
            <br />
            I have completed BTECH(Hons) in Computer Science Engineering at the
            University of Engineering and Management, Kolkata.
          </p>



          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching and Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aritra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
