import { useState, useEffect, useCallback } from "react";
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
  const navigate = useCallback(
    (page: Page) => {
      if (page === currentPage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      page === "catalog" &&
        window.history.pushState({ page: "catalog" }, "", "/catalogo");
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [currentPage]
  );

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (!event.state || event.state.page !== "catalog") {
        setCurrentPage("landing");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

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
    <div className="flex flex-col min-h-screen">
      <Header navigate={navigate} currentPage={currentPage} />
      <SocialsFloat />
      <main className="flex flex-col flex-grow">
        <div className="flex-grow">
          {currentPage === "landing" ? landingContent : <CatalogPage />}
        </div>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
