import React, { useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import useMailing from "../hooks/useMailing";
import { toast, ToastContainer } from "react-nextjs-toast";

const toastAlert = () => {
  toast.notify("🚀 Mensaje enviado con éxito!!", {
    duration: 5,
    type: "info",
    title: "Gracias por comunicarte",
  });
};

const Contact = () => {
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
    <section id="contacto" className={styles.contact}>
      <Container className="container mb-5">
        <div className="section-title text-center">
          <h1>Contáctanos</h1>
          <p>Déjanos tu consulta y nos comunicaremos a la brevedad.</p>
        </div>

        <Row>
          <Col lg={6}>
            <div className={styles.info__box}>
              <i className="las la-map-marked-alt"></i>
              <h3>Nuestras oficinas</h3>
              <p>Av. Fernando Fader 3763. 1° Piso. Oficina C.</p>
              <p>Cerro de las Rosas. CP. 5009 - Córdoba - Argentina.</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className={styles.info__box}>
              <i className="las la-envelope"></i>
              <h3>Envíanos un correo</h3>
              <small>
                <a href="mailto:estudio@morenoyasociados.com.ar">
                  estudio@morenoyasociados.com.ar
                </a>
              </small>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className={styles.info__box}>
              <i className="las la-phone-volume"></i>
              <h3>Teléfono</h3>
              <p>+54 351 7266646 </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <iframe
              className="mb-4 mb-lg-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13626.045503260531!2d-64.2368631!3d-31.3724603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c1d84d642962c0f!2sEstudio%20L.%20Felipe%20Moreno%20%26%20Asociados!5e0!3m2!1ses!2sar!4v1630711789747!5m2!1ses!2sar"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "384px" }}
              allowFullScreen
            ></iframe>
          </Col>

          <Col lg={6}>
            <Form onSubmit={handleSubmit} className={styles.php_email_form}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder="contacto@gmail.com"
                      value={contactData.email}
                      onChange={(e) =>
                        setContactData({
                          ...contactData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
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
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="(Cod Area) + Numero teléfono"
                  value={contactData.phone}
                  onChange={(e) =>
                    setContactData({ ...contactData, phone: e.target.value })
                  }
                  className={styles.contactSection__numberInput}
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
              <div className="text-center">
                <Button
                  variant="outline-info"
                  className="text-center d-block w-100"
                  type="submit"
                >
                  Enviar
                </Button>
              </div>
            </Form>
          </Col>
          <ToastContainer
            align={"left"}
            position={"botttom"}
            className="toast"
          />
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
