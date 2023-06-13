import projImg1 from "../assets/img/project-img1.png";
import projImg_1 from "../assets/img/project-img-1.png";
import pokebattle from "../assets/img/PokeBattle.png";
import geogamification from "../assets/img/GeoGamification.png";
import portfolio from "../assets/img/Portfolio.png";
import usermanagemicroservice from "../assets/img/user.jpg";
const projectsList = [
    {
      title: "Dentist-Website",
      description:"Basic personal website for a dentist with a catalog of treatments, a contact form, and a biography.",
      imgUrl: projImg_1,
      tecn: ["Angular", "Firebase", "TypeScript"],
      urlGit: "https://github.com/carloserna12/Web-Dentista",
      urlWeb: "https://dralejandrorobles.netlify.app",
      status: "Deploy",
    },
    {
      title: "My Portfolio Website",
      description:"Personal portfolio website for free use showcasing my work and skills.",
      imgUrl: portfolio,
      tecn: ["React", "JavaScript","NodeJs"],
      urlGit: "https://github.com/carloserna12/Portfolio",
      urlWeb: "https://carlossernadevportfolio.netlify.app/",
      status: "Deploy",
    },
    {
      title: "User Management Microservice",
      description:"Java with Spring Boot microservice creating an API using hexagonal architecture and JWT authentication.",
      imgUrl: usermanagemicroservice,
      tecn: ["Java", "Spring","MySql","Docker"],
      urlGit: "https://github.com/carloserna12/User-Management-Microservice",
      urlWeb: "",
      status: "DeployNot",
    },
    {
      title: "PokeBattle",
      description: "A web application, login functionality & consumption PokeAPI, simulating type battles.",
      imgUrl: pokebattle,
      tecn: ["Django", "Python","MySql","JavaScript"],
      urlGit: "https://github.com/carloserna12/PokeBattle",
      urlWeb: "",
      status: "DeployNot",
    },
    {
      title: "Geogamification website",
      description: "Gamified learning application for the Colombian departments.",
      imgUrl: geogamification,
      tecn: ["Django", "Python","MySql","JavaScript"],
      urlGit: "https://github.com/carloserna12/Geofication-web",
      urlWeb: "",
      status: "DeployNot",
    },
    
    
    
  ];


  export default projectsList;