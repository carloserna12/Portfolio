import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg_1 from "../assets/img/project-img-1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Web-Dentista",
      description:
        "Web basica personal para dentista con Node, Firebase, boostrap y Javascript ",
      imgUrl: projImg_1,
      tecn: ["Node", "Firebase", "JS", "Boostrap"],
      urlGit: "https://github.com/carloserna12/Web-Dentista",
      urlWeb: "https://dralejandrorobles.netlify.app",
      status: "Deploy",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      tecn: ["Java", "Python"],
      status: "InProgress",
      status: "DeployNot",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      tecn: ["Java", "Python"],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      tecn: ["Java", "Python", "JS", "SQL"],
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      tecn: ["JS", "Springboot", "SQL"],
    },
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
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
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
                          Ready for Deployment
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects
                            .filter((project) => project.status === "Deploy")
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects
                            .filter((project) => project.status === "DeployNot")
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
