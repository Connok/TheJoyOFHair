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
              <FaInstagram href="https://www.instagram.com/the.joy.of.hair/" />{" "}
              <FaFacebook href="https://www.facebook.com/thejoyofhairjoy" />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
