import { Row, Col } from "react-bootstrap";
import services from "../services";
import Service from "../components/Service";
const HomeScreen = () => {
  return (
    <>
      <h1>Services</h1>
      <Row>
        {services.map((service) => (
          <Col sm={12} md={6} l={4} xl={3}>
            <Service service={service} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
