import AboutSection from "./components/Sections/AboutSection/AboutSection";
import ContactSection from "./components/Sections/ContactSection/ContactSection";
import Navbar from "./components/Layout/Navbar/Navbar";
import PortfolioSection from "./components/Sections/PortfolioSection/PortfolioSection";
import { useRef } from "react";
import { NavRefs } from "./models/Nav";

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Pass references to each section to navigate
  const navRefs: NavRefs = {
    portfolioRef,
    contactRef,
    aboutRef
  }

  return (
    <>
      <Navbar navRefs={navRefs} />
      <AboutSection ref={aboutRef} />
      <PortfolioSection ref={portfolioRef} />
      <ContactSection ref={contactRef} />
    </>
  );
}

export default App;
