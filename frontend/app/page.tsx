import Image from "next/image";
import AboutMe from "./components/AboutMe";
import Offer from "./components/Offer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className='bg-bgcolor scroll-smooth'>
      <AboutMe />
      <Offer />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
