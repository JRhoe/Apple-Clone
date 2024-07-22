import Features from "./componants/Features";
import Footer from "./componants/Footer";
import Hero from "./componants/Hero";
import Highlights from "./componants/Highlights";
import HowItWorks from "./componants/HowItWorks";
import Model from "./componants/Model";
import Navbar from "./componants/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
