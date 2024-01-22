import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>The Joy Of Hair &copy; {currentYear} </p>
            <p>
              <a href="https://www.instagram.com/the.joy.of.hair/">
                <FaInstagram />
              </a>{" "}
              <a href="https://www.facebook.com/thejoyofhairjoy">
                <FaFacebook />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
