import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./pages/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import IntroVideo from "./components/introVideo/IntroVideo";
import StudentsPage from "./pages/StudentsPage";
import CRPage from "./pages/CRPage";
import CRBooksPage from "./components/crBooksPage/CRBooksPage";
import OnlineBtrPage from "./pages/OnlineBtrPage";
import OfflineBtrPage from "./pages/OfflineBtrPage";
import CrispPage from "./pages/CrispPage";
import BtrPage from "./pages/BtrPage";
import BootcampPage from "./pages/BootcampPage";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const CHANNEL_NAME = "intro_video_channel";
    let channel;

    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
      let otherTabExists = false;

      const handleMessage = (event) => {
        if (event.data.type === "tab_exists") {
          otherTabExists = true;
        } else if (event.data.type === "checking") {
          channel.postMessage({ type: "tab_exists" });
        }
      };

      channel.addEventListener("message", handleMessage);
      channel.postMessage({ type: "checking" });

      const timeoutId = setTimeout(() => {
        if (!otherTabExists) {
          const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");
          if (!hasSeenVideo) {
            setShowIntro(true);
          }
        }
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        if (channel) {
          channel.removeEventListener("message", handleMessage);
          channel.close();
        }
      };
    } catch (error) {
      const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");
      if (!hasSeenVideo) {
        setShowIntro(true);
      }
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroVideo onEnd={handleVideoEnd} />}
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/btr" element={<BtrPage />} />
          <Route path="/online-btr" element={<OnlineBtrPage />} />
          <Route path="/offline-btr" element={<OfflineBtrPage />} />
          <Route path="/bootcamp" element={<BootcampPage />} />
          <Route path="/conceptual-radiology" element={<CRPage />} />
          <Route path="/conceptual-radiology-books" element={<CRBooksPage />} />
          <Route path="/crisp" element={<CrispPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
