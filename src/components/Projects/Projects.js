import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pricee from "../../Assets/Projects/Pricee.png";
import Streaming from "../../Assets/Projects/Streaming.png";
import pizzahub from "../../Assets/Projects/pizzahub.png";
import food from "../../Assets/Projects/food.png";

function Projects() {
  return (
    <section id="projects">
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
              imgPath={pricee}
              isBlog={false}
              title="Pricee"
              description="It's an E-commmerce Web Application which provide the facility of sorting the price and displaying the price of Amazon and Flipkart to lowest to highest price"
              ghLink="https://github.com/Gautammm16/Pricee"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzahub}
              isBlog={false}
              title="Pizza-Hub"
              description="It's an online Pizza Delivery Web Application
              in which we can also track the order, what's the status of order like it's in the kitchen , ready for the delivery , in the route, etc..  "
              ghLink="https://github.com/Gautammm16/PizzaHub"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Streaming}
              isBlog={false}
              title="Multiple Pov Stream Player"
              description="This is Multiple streaming  POV Player, by using this you can enjoy multiple streamer POV's from YOUTUBE AND TWITCH. "
              ghLink="https://github.com/Gautammm16/MultiStream-Player-Hub"
                           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery Website"
              description="This is Food Delivery Website Using Html and css, It's a Single Page Website."
              ghLink="https://github.com/Gautammm16/Food-Delivery-Website"
                          
            />
          </Col>

        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Projects;
