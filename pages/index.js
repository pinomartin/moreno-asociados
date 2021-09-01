// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { Container } from "react-bootstrap";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SectionDividerTop } from "../components/SectionDividerTop";
import { SectionDividerBottom } from "../components/SectionDividerBottom";
import { ServiceContainer } from "../components/ServiceContainer";
import Carousel from "../components/Caruosel";
// import ChatBotLink from "../components/ChatBotLink";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavigationBar";

export default function Home() {
  return (
    <>
      {/* <Head>
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
        <link rel="icon" href="/favicon.ico" />
        <ChatBotLink />
      </Head> */}

      {/* <Container fluid className="main-container bg-light"> */}
      <Header />
      <NavBar />
      <SectionDividerTop />
      <ServiceContainer />
      <SectionDividerBottom />
      <Hero />
      <SectionDividerTop />
      <Carousel />
      <SectionDividerBottom />
      <ContactSection />
      <Footer />
      {/* </Container> */}

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      {/* <ChatBotLink /> */}
    </>
  );
}
