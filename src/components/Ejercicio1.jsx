import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/ejercicio1.css'

export default function Ejercicio1() {
  return (
    <Container className='Container'>
      <Row>
        <Col><h3>Ejercicio 1</h3></Col>
        <Col>Hello World</Col>
      </Row>
    </Container>
  )
}