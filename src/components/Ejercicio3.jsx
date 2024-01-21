import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/ejercicio3.css';

const Ejercicio3 = ({ oracion }) => {
  const [mensaje, setMensaje] = useState('Hello My Friend');

  const handleButtonClick = () => {
    mensaje === 'Hello My Friend'
      ? setMensaje('Hello my friend from handle changed')
      : setMensaje('Hello My Friend');
  };

  return (
    <Container className="ejer3">
      <Row className='col3'>
        <Col><h3>Ejercicio 3</h3></Col>
        <Col>{mensaje}</Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleButtonClick}>Mostrar Mensaje</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Ejercicio3;