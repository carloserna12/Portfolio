import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faBootstrap, faCss3, faGithub, faHtml5, faJava, faJs, faNode, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faEarthAmerica, faLeaf, faServer } from "@fortawesome/free-solid-svg-icons";
export const ProjectCard = ({ title, description, imgUrl,tecn,urlGit,urlWeb }) => {
  const iconos = {
    "Java": faJava,
    "Python": faPython,
    "JS": faJs,
    "SQL":faDatabase,
    "Node":faNodeJs,
    "Angular":faAngular,
    "Boostrap":faBootstrap,
    "CSS":faCss3,
    "HTML":faHtml5,
    "React":faReact,
    "Api-rest":faServer,
    "Springboot":faLeaf,
    "Firebase":faDatabase,
    // Agrega más íconos según sea necesario
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <button onClick={() => window.open(urlGit)} className="btn-git"><FontAwesomeIcon icon={faGithub}  /><span className="btn-git-style">GitHub </span></button>
          <button onClick={() => window.open(urlWeb)} className="btn-git"><FontAwesomeIcon icon={faEarthAmerica}  /><span className="btn-git-style"> Web</span></button>
        </div>
      </div>
      <div className="tecn-container">
      {tecn.map((item, index) => (
          <span key={index} className="tech-container">
            <span className="tech"> <FontAwesomeIcon icon={iconos[item]} className="tech-icon" /> {item}</span>
          </span>
        ))}
      </div>
    </Col>
    
  )
}
