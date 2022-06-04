import "./styles/app.css";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="container">
      <section>
        <h2>About Me</h2>
        {/* <WorkSection /> */}
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
