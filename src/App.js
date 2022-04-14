import Index from "./components/Index";
import "./assets/css/general.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexInformation from "./components/SécuritéSystèmed’Information/Index";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Slider from "./components/blog/slider/Slider";
import Indexblog from "./components/blog/Index";
import SingleArticle from "./components/blog/articles/SingleArticle";
import Welcome from "./components/welcome/Welcome";
import ArticleArchive from "./components/archives/ArticleArchive";
import Profil from "./components/profil/Profil";
import "./app.css";
import LinkContact from "./pages/LinkContact";
import Activate from "./auth/Activate";
import EmailVerify from "./emailVerify";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/information" element={<IndexInformation />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/loginup" element={<SignUp />} />
          <Route path="/slide" element={<Slider />} />
          <Route path="/article" element={<Indexblog />} />
          <Route path="/signle" element={<SingleArticle />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/archive" element={<ArticleArchive />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/confirmer/:id" element={<EmailVerify />} />
          <Route path="/contact" element={<LinkContact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
