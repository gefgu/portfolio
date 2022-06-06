import "./styles/fonts.css";
import "./styles/app.css";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="container">
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
