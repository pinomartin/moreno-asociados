import Head from "next/head";
import { Container } from "react-bootstrap";
import ChatBotLink from "../components/ChatBotLink";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Container fluid className="bg-light">
      <Head>
        <meta name="author" content="Martin Pino Web Developer" />
        <meta
          name="description"
          content="L. Felipe Moreno & Asociados Contadores Públicos Servicios de Consultoria Laboral Contable AFIP Cordoba. Argentina"
        />
        <meta
          name="keywords"
          content="Estudio, Contable, Impuestos, Cordoba Capital, AFIP, Laboral, Jubilacion, Sueldos, Consultoria, Empresas, Clientes, Atencion"
        />
        <meta name="copyright" content="L. Felipe Moreno & Asociados" />
        <title>Estudio L. Felipe Moreno & Asociados</title>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
        <link rel="icon" href="/favicon.ico" />

        <ChatBotLink />
      </Head>

      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
