import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Expireance from "./components/Expireance"


function App() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <Hero/>
      <Expireance/>
      <About/>
      <Skills/>
      <Testimonials/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
