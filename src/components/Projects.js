import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useState } from "react";
import icons from "./icons";
import projects from "./ProjectsList";

export const Projects = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  const technologies = [
    "Java",
    "Python",
    "JavaScript",
    "MySql",
    "NodeJs",
    "Angular",
    "React",
    "Spring",
    "Firebase",
    "Vue",
    "Aws",
    "Cloud",
    "CSharp",
    "Django",
    "Docker",
    "Mongo",
    "PostgreSql",
    "SqlServer",
    "TypeScript",
    "Unity",
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Check out what I've been up to! Here are some of the
                    projects I've been working on recently.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <div className="checkbox-list">
                      {projects
                        .flatMap((project) => project.tecn)
                        .filter(
                          (technology, index, self) =>
                            self.indexOf(technology) === index
                        )
                        .map((technology) => (
                          <div key={technology} className="checkbox-item">
                            <label className="checkbox-label">
                              <input
                                type="checkbox"
                                value={technology}
                                checked={checkedItems.includes(technology)}
                                onChange={handleCheckboxChange}
                              />
                              <img
                                src={icons[technology]}
                                alt={technology}
                                className="tech-icon-filter"
                              />
                              {technology}
                            </label>
                          </div>
                        ))}
                    </div>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects
                            .filter(
                              (project) =>
                                checkedItems.length === 0 ||
                                checkedItems.every((item) =>
                                  project.tecn.includes(item)
                                )
                            )
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
