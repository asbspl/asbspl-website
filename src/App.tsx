import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import AIChatbot from "./components/AIChatbot/AIChatbot";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handlePageLoad = () => {
      setPageLoading(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    // Initial page loading
    if (document.readyState === "complete") {
      setPageLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    // Network status
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("load", handlePageLoad);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <AIChatbot />

      <AppRoutes />

      <Footer />

      {/* SAME loader for page loading + network offline */}
      {(pageLoading || isOffline) && <Loader />}
    </BrowserRouter>
  );
};

export default App;