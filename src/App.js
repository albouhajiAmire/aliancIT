import Index from "./components/Index";
import "./assets/css/general.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Information from "./components/SécuritéSystèmed’Information/Information";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Slider from "./components/blog/slider/Slider";
import Indexblog from "./components/blog/Index";
import SingleArticle from "./components/blog/articles/SingleArticle";
import Welcome from "./components/welcome/Welcome";
import ArticleArchive from "./components/archives/ArticleArchive";
import Profil from "./components/profil/Profil";
import "./app.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/information" element={<Information />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/loginup" element={<SignUp />} />
          <Route path="/slide" element={<Slider />} />
          <Route path="/article" element={<Indexblog />} />
          <Route path="/signle" element={<SingleArticle />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/archive" element={<ArticleArchive />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
