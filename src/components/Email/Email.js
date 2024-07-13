import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import './Email.css';

const Email = ({ id }) => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm('service_suod782Reno', 'template_0uhy42d', form.current, {
        publicKey: '8Rj4JY71aGPvEsFkY',
      })
      .then(
        () => {
          setShowAlert(true);
          form.current.reset(); // Clear the form inputs
          setIsLoading(false);
          setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div id={id}>
      {showAlert && <Alert variant="success">Email envoyer, nous vous recontacterons dans les plus brefs délais</Alert>}
      <Form ref={form} onSubmit={sendEmail}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Votre adresse mail</Form.Label>
            <Form.Control type="email" placeholder="Email" name="from_email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Votre nom:</Form.Label>
            <Form.Control type="text" placeholder="Nom" name="from_name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Votre message:</Form.Label>
          <Form.Control placeholder="Adresse, type de travaux, superficie ..." name="message" />
        </Form.Group>

        <button className="btn" type="submit" value="Send" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Sending...</span>
            </>
          ) : (
            'Envoyer'
          )}
        </button>
      </Form>
    </div>
  );
}

export default Email;
