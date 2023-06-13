import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
//import { HashLink } from 'react-router-hash-link';
import hv from '../assets/hv/hv.pdf';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const handleDownload = () => {
    window.open(hv, '_blank');
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <div className="logo-CDev">
            <img src={logo} alt="Logo" /><h2>CarlosDev</h2>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"      className={activeLink === 'home'      ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home'    )}>Home</Nav.Link>
              <Nav.Link href="#skills"    className={activeLink === 'skills'    ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills'  )}>About me</Nav.Link>
              <Nav.Link href="#project"  className={activeLink === 'project'  ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
              <Nav.Link href="#connect"  className={activeLink === 'connect'  ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Let’s Connect</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/carlos-serna-91603a214/"  target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/carloserna12" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="#" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
              <button className="vvd" onClick={handleDownload}><span>Download my CV!</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
