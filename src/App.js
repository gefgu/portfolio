import "./styles/app.css";
import WorkSection from "./components/WorkSection";

function App() {
  return (
    <div className="container">
      <section>
        <h2>About Me</h2>
        <WorkSection />
        <h2>Contact me</h2>
      </section>
    </div>
  );
}

export default App;
