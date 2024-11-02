import Benefit from "./components/Benefit";
import ScrollTop from "./components/common/ScrollTop";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Offer from "./components/Offer";
import OnePlace from "./components/OnePlace";
import ProjectList from "./components/ProjectList";
import Reporting from "./components/Reporting";
import SystemApp from "./components/SystemApp";
import TimeSaving from "./components/TimeSaving";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <ScrollTop />
      <NavBar />
      <Hero />
      <SystemApp />
      <Offer />
      <ProjectList />
      <OnePlace />
      <Reporting />
      <Benefit />
      <TimeSaving />
    </div>
  );
}

export default App;
