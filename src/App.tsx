import AboutSection from "./components/Sections/AboutSection/AboutSection";
import ContactSection from "./components/Sections/ContactSection/ContactSection";
import Navbar from "./components/Layout/Navbar/Navbar";
import PortfolioSection from "./components/Sections/PortfolioSection/PortfolioSection";

function App() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}

export default App;
