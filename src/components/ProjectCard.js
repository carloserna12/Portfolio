import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, } from "@fortawesome/free-brands-svg-icons";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import icons from "./icons";
export const ProjectCard = ({ title, description, imgUrl,tecn,urlGit,urlWeb,status }) => {
  return (
    <Col size={12} sm={6} md={4} style={{ marginBottom: '30px' }}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <button onClick={() => window.open(urlGit)} className="btn-git"><FontAwesomeIcon icon={faGithub}  /><span className="btn-git-style">GitHub </span></button>
          {urlWeb !== "" && (
            <button onClick={() => window.open(urlWeb)} className="btn-git">
              <FontAwesomeIcon icon={faEarthAmerica} /><span className="btn-git-style">Web</span>
            </button>
          )}
        </div>
      </div>
      <div className="tecn-container">
      {tecn.map((item, index) => (
          <span key={index} className="tech-container">
            <span className="tech"> <img src={icons[item]} alt={item} className="tech-icon" /> {item}</span>
          </span>
        ))}
      </div>
    </Col>
    
  )
}
