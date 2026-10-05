import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import AIChatbot from "./components/AIChatbot/AIChatbot";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
             <AIChatbot />
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
