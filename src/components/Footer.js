import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/carlos-serna-91603a214/"  target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/carloserna12" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://api.whatsapp.com/send?phone=3165590496&text=Hola" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved | <a href="https://storyset.com/work" style={{ textDecoration: 'none' }}>illustrations ♥</a></p>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
