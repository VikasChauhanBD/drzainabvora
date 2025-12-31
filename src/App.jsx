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

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const CHANNEL_NAME = "intro_video_channel";
    let channel;

    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
      let otherTabExists = false;

      // Listen for messages from other tabs
      const handleMessage = (event) => {
        if (event.data.type === "tab_exists") {
          // Another tab exists, don't show video
          otherTabExists = true;
          setShowIntro(false);
          setIsChecking(false);
        } else if (event.data.type === "checking") {
          // Another tab is checking, respond that we exist
          channel.postMessage({ type: "tab_exists" });
        }
      };

      channel.addEventListener("message", handleMessage);

      // Ask if any other tab is already open
      channel.postMessage({ type: "checking" });

      // Wait briefly for responses
      const timeoutId = setTimeout(() => {
        if (!otherTabExists) {
          // No other tabs exist, check if video should play
          const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");
          if (!hasSeenVideo) {
            setShowIntro(true);
          }
        }
        setIsChecking(false);
      }, 100);

      // Cleanup
      return () => {
        clearTimeout(timeoutId);
        if (channel) {
          channel.removeEventListener("message", handleMessage);
          channel.close();
        }
      };
    } catch (error) {
      // BroadcastChannel not supported, just check sessionStorage
      const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");
      if (!hasSeenVideo) {
        setShowIntro(true);
      }
      setIsChecking(false);
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  // Show nothing while checking for other tabs
  if (isChecking) {
    return null;
  }

  return (
    <>
      {showIntro ? (
        <IntroVideo onEnd={handleVideoEnd} />
      ) : (
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
            <Route
              path="/conceptual-radiology-books"
              element={<CRBooksPage />}
            />
            <Route path="/crisp" element={<CrispPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
