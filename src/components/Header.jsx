import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.ico";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar
        variant="dark"
        expand="md"
        collapseOnSelect
        style={{ background: "#4b0082" }}
      >
        <Container>
          <img src={logo} alt="TheJoyOfHair" width="50px" height="50px" />
          <Navbar.Brand href="/">The Joy Of Hair</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://www.instagram.com/the.joy.of.hair/">
                <FaInstagram /> Instagram
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/thejoyofhairjoy">
                <FaFacebook /> Facebook
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
