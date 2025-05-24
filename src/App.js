// src/App.js (Example - assuming you have a Router set up)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compontents/navbar'; // Assuming you have a Header component
import Footer from './compontents/footer'; // Assuming you have a Footer component
import HomePage from './pages/HomePage'; // Example: Your home page component
import AboutUsPage from './pages/AboutPage'; // Example: About Us page
import PricingPage from './pages/PricingPage'; // Example: Pricing page
import BlogPage from './pages/BlogPage'; // Example: Blog listing page
import FAQPage from './pages/FAQ'; // Example: FAQ page
import PasswordGeneratorPage from './pages/PassGen'; // Your Password Generator page
import ContactPage from './pages/ContactPage'; // Your Get A Quote page
import ArticlePasswordSecurityPage from './pages/article1'; // Your first article
import ArticleResponsiveDesignPage from './pages/article2'; // NEW: Your second article
import ScrollToTop from './compontents/scrolltop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> {/* Your common header component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/password-gen" element={<PasswordGeneratorPage />} />
        <Route path="/quote" element={<ContactPage />} />
        {/* Specific Article Routes */}
        <Route path="blog/password-security" element={<ArticlePasswordSecurityPage />} />
        <Route path="blog/mobile-first" element={<ArticleResponsiveDesignPage />} /> {/* NEW ROUTE */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer /> {/* Your common footer component */}
    </Router>
  );
}

export default App;