// Imports
import HomePage from "./components/pages/home/HomePage";
import BlogPage from "./components/pages/allblogs/BlogPage";
import AboutPage from "./components/pages/about/AboutPage";
import ContactPage from "./components/pages/contact/ContactPage";
import LoginPage from "./components/pages/login/LoginPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogTemplate from "./components/pages/blog/BlogTemplate";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LogoutPage from "./components/pages/logout/LogoutPage";
import NotFoundPage from "./components/pages/404/NotFoundPage";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import Contests from "./components/pages/contests/Contests";
import React from "react";


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
            <Route path="login" element={<LoginPage />} />
            <Route path="logout" element={<LogoutPage />} />
            <Route path="blog/:id" element={<BlogTemplate />}/>
            <Route path="dashboard" element={<DashboardPage/>}/>
            <Route path="contests" element={<Contests/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
