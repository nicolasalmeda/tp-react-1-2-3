import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/ejercicio2.css'


// eslint-disable-next-line react/prop-types
const Ejercicio2 = ({oracion}) => {
  return (
    <Container className="ejer2">
      <Row>
      <Col><h3>Ejercicio 2</h3></Col>
      <Col>Hello {oracion}</Col>
      </Row>
    </Container>
  );
};

export default Ejercicio2;