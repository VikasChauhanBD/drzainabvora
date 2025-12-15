import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import IntroVideo from "./components/introVideo/IntroVideo";
import StudentsPage from "./pages/StudentsPage";
import CRPage from "./pages/CRPage";
import CRBooksPage from "./components/crBooksPage/CRBooksPage";
import Footer from "./components/footer/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  // Check sessionStorage to decide whether to show intro video
  useEffect(() => {
    const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenVideo) {
      setShowIntro(true);
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <IntroVideo onEnd={handleVideoEnd} />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/conceptual-radiology" element={<CRPage />} />
            <Route
              path="/conceptual-radiology-books"
              element={<CRBooksPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
