import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center">
            <p>© 2024 Ting Chu Gardening All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
