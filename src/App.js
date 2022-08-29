import PageBanner from "./components/pagebanner/PageBanner";
import HomePage from "./components/pages/home/HomePage";
import BlogPage from "./components/pages/allblogs/BlogPage";
import AboutPage from "./components/pages/about/AboutPage";
import ContactPage from "./components/pages/contact/ContactPage";
import Login from "./components/pages/login/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogTemplate from "./components/pages/blog/BlogTemplate";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<Login />} />
            <Route path="blog/:id" element={<BlogTemplate />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
