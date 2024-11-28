import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Partner from "./components/partner/Partner";
import Blog from "./components/blog/Blog";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Partner />
      <Blog />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
