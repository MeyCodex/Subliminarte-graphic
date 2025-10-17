import { useState } from "react";
import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import Services from "@/layouts/Services";
import Gallery from "@/layouts/Gallery";
import Location from "@/layouts/Location";
import Footer from "@/layouts/Footer";
import About from "@/layouts/About";
import SocialsFloat from "@/components/SocialsFloat";
import Testimonials from "./layouts/Testimonials";
import { Analytics } from "@vercel/analytics/react";
import CatalogPage from "./layouts/CatalogPage";

type Page = "landing" | "catalog";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const landingContent = (
    <>
      <Hero navigate={navigate} />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Location />
    </>
  );

  return (
    <>
      <Header navigate={navigate} currentPage={currentPage} />
      <SocialsFloat />
      <main>
        {currentPage === "landing" ? landingContent : <CatalogPage />}
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
