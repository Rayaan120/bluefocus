import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Bulletin from "./pages/Bulletin";

import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop';  // ✅ import it

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.title = `${
      currentPage.charAt(0).toUpperCase() + currentPage.slice(1)
    } - Blue Focus Events & Exhibitions`;
  }, [currentPage]);

  const renderPage = () => {
     <ScrollToTop /> 
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
       case "about":
        return <About onNavigate={handleNavigate} />;
      case "services":
        return <Services onNavigate={handleNavigate} />;
       case "bulletin":
        return <Bulletin onNavigate={handleNavigate} />;
      case "portfolio":
        return <Portfolio onNavigate={handleNavigate} />;
      case "contact":
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
