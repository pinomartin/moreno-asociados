import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import useMailing from "../hooks/useMailing";
import { toast , ToastContainer } from "react-nextjs-toast";

const toastAlert = () => {
  toast.notify("🚀 Mensaje enviado con éxito!!", {
    duration: 5,
    type: "info",
    title:'Gracias por comunicarte', 
  });
};

const ContactSection = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [contactData, setContactData] = useState(initialState);
  const { sendEmail } = useMailing();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail("martin91pino@gmail.com", contactData).then(toastAlert);
    setContactData(initialState);
  };

  return (
    <section id="contacto">
      <Row className="justify-content-center align-items-center mt-3 mb-5">
        <Col xs={12} sm={12} md={8} lg={4} className="text-center">
          <h1>Contáctanos</h1>
          <p>Dejanos tu consulta y nos comunicaremos a la brevedad</p>
        </Col>
        <Col xs={12} sm={12} md={8} lg={4} className="justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="contacto@gmail.com"
                value={contactData.email}
                onChange={(e) =>
                  setContactData({ ...contactData, email: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={contactData.name}
                onChange={(e) =>
                  setContactData({ ...contactData, name: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                placeholder="(Cod Area) + Numero teléfono"
                value={contactData.phone}
                onChange={(e) =>
                  setContactData({ ...contactData, phone: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Tu Mensaje"
                value={contactData.message}
                onChange={(e) =>
                  setContactData({ ...contactData, message: e.target.value })
                }
                required
              />
            </Form.Group>

            {/* <input type="email" value={contactData.email} onChange={e => setContactData({...contactData, email: e.target.value})} /> */}
            <Button
              variant="outline-info"
              className="text-center d-block w-100"
              type="submit"
            >
              Enviar
            </Button>
          </Form>
        </Col>
      <ToastContainer align={"left"} position={"botttom"} className="toast" />
      </Row>
    </section>
  );
};

export default ContactSection;
