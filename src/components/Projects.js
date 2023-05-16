import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg_1 from "../assets/img/project-img-1.png"
;import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useState } from 'react';
import java from "../assets/img/java.svg";
import js from "../assets/img/javascript.svg";
import nodeJs from "../assets/img/nodejs.svg";
import angular from "../assets/img/angular.svg";
import aws from "../assets/img/aws.svg";
import cloud from "../assets/img/cloud.svg";
import csharp from "../assets/img/csharp.svg";
import django from "../assets/img/django.svg";
import docker from "../assets/img/docker.svg";
import firebase from "../assets/img/firebase.svg";
import mongo from "../assets/img/mongo.svg";
import mysql from "../assets/img/mysql.svg";
import postgresql from "../assets/img/postgresql.svg";
import python from "../assets/img/python.svg";
import reacticon from "../assets/img/react.svg";
import spring from "../assets/img/spring.svg";
import sqlserver from "../assets/img/sqlserver.svg";
import typescript from "../assets/img/typescript.svg";
import unity from "../assets/img/unity.svg";
import vue from "../assets/img/vue.svg";
export const Projects = () => {
  const projects = [
    {
      title: "Web-Dentista",
      description:
        "Web basica personal para dentista con Node, Firebase, boostrap y Javascript ",
      imgUrl: projImg_1,
      tecn: ["NodeJs", "Firebase", "JavaScript"],
      urlGit: "https://github.com/carloserna12/Web-Dentista",
      urlWeb: "https://dralejandrorobles.netlify.app",
      status: "Deploy",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      tecn: ["Aws", "Python","React","Django"],
      status: "InProgress",
      status: "DeployNot",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      tecn: ["SqlServer", "Python","Vue"],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      tecn: ["Mongo", "CSharp", "Docker","Unity"],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      tecn: ["JavaScript", "Spring", "PostgreSql","Java"],
    },
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };


  const technologies = ['Java', 'Python', 'JavaScript', 'MySql', 'NodeJs','Angular','React','Spring','Firebase','Vue','Aws','Cloud','CSharp','Django','Docker','Mongo','PostgreSql','SqlServer','TypeScript','Unity'];
  
  const iconos = {
    "Java": java,
    "Python": python,
    "JavaScript": js,
    "MySql":mysql,
    "NodeJs":nodeJs,
    "Angular":angular,
    "React":reacticon,
    "Spring":spring,
    "Firebase":firebase,
    "Vue":vue,
    "Aws":aws,
    "Cloud":cloud,
    "CSharp":csharp,
    "Django":django,
    "Docker":docker,
    "Mongo":mongo,
    "PostgreSql":postgresql,
    "SqlServer":sqlserver,
    "TypeScript":typescript,
    "Unity":unity,
  };
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
                    <Nav
                      variant="pills"
                      className="nav-pills mb-4 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">In Production</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                        Rdy to deploy
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>


                    <div className="checkbox-list">
                      {technologies.map((technology) => (
                        <div key={technology} className="checkbox-item">
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              value={technology}
                              checked={checkedItems.includes(technology)}
                              onChange={handleCheckboxChange}
                            />
                            <img src={iconos[technology]} alt={technology} className="tech-icon-filter" />
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
                            .filter((project) =>
                              checkedItems.length === 0 ||
                              checkedItems.every((item) => project.tecn.includes(item))
                            )
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects
                            .filter(
                              (project) =>
                                project.status === "Deploy" &&
                                checkedItems.every((item) => project.tecn.includes(item))
                            )
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects
                            .filter(
                              (project) =>
                                project.status === "DeployNot" &&
                                checkedItems.every((item) => project.tecn.includes(item))
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
