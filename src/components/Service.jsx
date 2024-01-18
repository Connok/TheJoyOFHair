import { Card } from "react-bootstrap";

const Service = ({ service }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={service.image} variant="top" />

      <Card.Body>
        <Card.Title as="div">
          <strong>{service.serviceName}</strong>
        </Card.Title>

        <Card.Text as="h3">${service.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
