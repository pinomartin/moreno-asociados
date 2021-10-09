import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SectionDividerTop } from "../components/SectionDividerTop";
import { ServiceContainer } from "../components/ServiceContainer";
import Carousel from "../components/Caruosel";
import Footer from "../components/Footer";
import NavBar from "../components/NavigationBar";
import SectionDividerBottomColor from "../components/SectionDividerBottomColor";
import {SectionDividerBottom} from "../components/SectionDividerBottom";
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
      <SectionDividerBottom />
      <About />
      <SectionDividerTop colorNoRadius={true} backgroundColor={'rgb(240,246,246)'} />
      <Contact />
      <Footer />
    
    </>
  );
}
