import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPhone, faAt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactPage.css';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dane formularza:', e.target.name.value, e.target.email.value, e.target.message.value);
  };

  return (
    <Container className="contact-page">
      <h1 className="text-center">Kontakt</h1>
      <Row className="contact-info">
        <Col xs={12} md={6} lg={4}>
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
          <p>Grupa Ankara.pl</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>tel.: 58 341 35 16</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <FontAwesomeIcon icon={faAt} className="icon" />
          <p>biuro@ankara.pl</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <p className="text-center">
            <a
              href="https://www.google.com/maps/place/ul.+Partyzantów+49,+80-254+Gdańsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              ul. Partyzantów 49, 80-254 Gdańsk
            </a>
          </p>
        </Col>
      </Row>
      <Row className="contact-form">
        <Col xs={12} md={6} lg={8} className="text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Imię:</Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Wiadomość:</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Skontaktuj się z nami
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;