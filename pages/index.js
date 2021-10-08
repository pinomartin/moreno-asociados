import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SectionDividerTop } from "../components/SectionDividerTop";
import { ServiceContainer } from "../components/ServiceContainer";
import Carousel from "../components/Caruosel";
import Footer from "../components/Footer";
import NavBar from "../components/NavigationBar";
import SectionDividerBottomColor from "../components/SectionDividerBottomColor";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Header />
      <NavBar isHome={true} />
      <SectionDividerTop />
      <ServiceContainer />
      <SectionDividerBottomColor />
      <Hero />
      <SectionDividerTop colorNoRadius={true} />
      <Carousel />
      <SectionDividerBottomColor />
      <About />
      <SectionDividerTop colorNoRadius={true} backgroundColor={'#005A8A'} />
      <Contact />
      <Footer />
    
    </>
  );
}
