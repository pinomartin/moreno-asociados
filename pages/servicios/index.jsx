import { Col, Row, Container } from "react-bootstrap";
import { Header } from "../../components/Header";
import ListItem from "../../components/ListItem";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { SectionDividerTop } from "../../components/SectionDividerTop";
import styles from "../../styles/Home.module.css";
import { dataServices } from "../../data/services";
import Image from "next/image";
import Contact from "../../components/Contact";

const index = () => {
  return (
    <>
      <Header />
      <NavigationBar isHome={false} />
      <SectionDividerTop />
      <section>
        <Row className="text-center m-5">
          <Col xs={12}>
            <h1 id="servicios">Nuestros Servicios</h1>
          </Col>
        </Row>

        {dataServices.map(({ id, title, imgSrc, imgAlt, listItems }) => (
          <div className={`${styles.services__section__spacing}`}>
            <Container className="container" key={id}>
              <header className={`${styles.services__section__header}`}>
                <h2 className={`${styles.section__header__title}`}>{title}</h2>
                {/* <p>Laboriosam et omnis fuga quis dolor direda fara</p> */}
              </header>

              <Row className="row justify-content-center align-items-center">
                <Col lg={3}>
                  <Image
                    src={imgSrc}
                    className="img-fluid"
                    alt={imgAlt}
                    width={200}
                    height={200}
                  />
                </Col>

                <Col lg={9} className="mt-5 mt-lg-0 d-flex">
                  <Row className="align-self-center gy-4">
                    {listItems.map((item, index) => (
                      <ListItem label={item} key={index} />
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </section>
      <Contact/>
      <Footer />
    </>
  );
};

export default index;
