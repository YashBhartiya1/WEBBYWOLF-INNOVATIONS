import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import SectionTwo from "./components/SectionTwo";
import Banner from "./components/Banner";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import Banner2 from "./components/Banner2";
import Form from "./components/Form";
import Mockup from "./components/Mockup";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import Sectionseven from "./components/Sectionseven";
import Sectioneight from "./components/Sectioneight";
import Sectionnine from "./components/Sectionnine";
import Sectionten from "./components/Sectionten";
import Faq from "./components/Faq";
import Sectionelevan from "./components/Sectionelevan";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <SectionTwo />
      <Banner />
      <SectionThree />
      <SectionFour />
      <Banner2 />
      <Form />
      <Mockup />
      <SectionFive />
      <SectionSix />
      <Sectionseven />
      <Sectioneight />
      <Sectionnine />
      <Sectionten />
      <Faq/>
      <Sectionelevan/>
      <Footer/>
    </>
  );
}
