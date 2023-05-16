import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faBootstrap, faCss3, faGithub, faHtml5, faJava, faJs, faNode, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faEarthAmerica, faLeaf, faServer } from "@fortawesome/free-solid-svg-icons";
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
export const ProjectCard = ({ title, description, imgUrl,tecn,urlGit,urlWeb,status }) => {
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
            <span className="tech"> <img src={iconos[item]} alt={item} className="tech-icon" /> {item}</span>
          </span>
        ))}
      </div>
    </Col>
    
  )
}
