import Index from "./components/Index";
import "./assets/css/general.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Information from "./components/SécuritéSystèmed’Information/Information";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/information" element={<Information />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
