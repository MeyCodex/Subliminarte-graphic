import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import Services from "@/layouts/Services";
import Gallery from "@/layouts/Gallery";
import Location from "@/layouts/Location";
import Footer from "@/layouts/Footer";
import About from "@/layouts/About";
import SocialsFloat from "@/components/SocialsFloat";
import Testimonials from "./layouts/Testimonials";

function App() {
  return (
    <>
      <Header />
      <SocialsFloat />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Location />
        <Footer />
      </main>
    </>
  );
}

export default App;
