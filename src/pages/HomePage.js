// src/pages/HomePage.js
import React from 'react';
import Image1 from '../Images/Clientreviewingtheirwebsite.jpg';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/homepage.css'; // Import the homepage-specific CSS

// Assuming your images are in the public/Images folder
// If they are in src/Images, you would import them like:
// import heroImage from '../Images/Clientreviewingtheirwebsite.jpg';

function HomePage() {
  return (
    // React components usually return a single root element.
    // We'll wrap all your sections in a div since the <main> tag is handled by App.js
    // and we want this component to only contain its specific content.
    // The id="indexpage-main" is kept here for CSS specificity, but typically
    // it would be on the <main> element itself in App.js. We'll use a wrapper div.
    <div id="indexpage-main-wrapper" className='Home-Page-main'> {/* A wrapper for your homepage sections */}
      <section id="hero-section" className="hero">
        <div className="hero-content">
          <h1>Your Vision, Beautifully Built Online.</h1>
          <p>Stop settling for basic. DE Innovative Solutions crafts high-quality, custom websites tailored to
            your exact needs, whether through meticulous hardcoding, dynamic WordPress, or sleek Wix.</p>
          <div className="hero-buttons">
            {/* Use Link component for internal navigation */}
            <Link to="/quote" className="button primary">Get Your Personalised Quote Today</Link>
            {/* The commented out link remains commented in JSX */}
            {/*<a href="#portfolio-section" class="button secondary">See Our Recent Work</a>*/}
          </div>
        </div>
        <div className="hero-image-container">
          {/* Adjust src path for image as per your image location */}
          <img src={Image1}
            alt="Professionally designed website on multiple devices" />
        </div>
      </section>

      <section id="why-choose-us" className="why-choose">
        <h2>Why Partner with DE Innovative Solutions?</h2>
        <ul className="benefits-list">
          <li className="benefit">
            <span className="icon"></span> {/* Placeholder for actual icon, e.g., SVG or image */}
            <h3>Crafted with Precision</h3>
            <p>We go beyond templates. Our websites are built with meticulous attention to detail, whether we
              are writing clean code or customising a platform to perfection.</p>
          </li>
          <li className="benefit">
            <span className="icon"></span> {/* Placeholder for actual icon */}
            <h3>Powering Your Success</h3>
            <p>A great website is more than just aesthetics. We focus on creating sites that are user-friendly,
              SEO-optimized, and designed to achieve your specific business goals.</p>
          </li>
          <li className="benefit">
            <span className="icon"></span> {/* Placeholder for actual icon */}
            <h3>Your Vision, Our Expertise</h3>
            <p>We listen closely to your needs and translate your vision into a compelling online reality,
              offering personalised solutions every step of the way.</p>
          </li>
        </ul>
        <div class="testimonels">
          <h2>Don't take our word for it, hear from out clients</h2>
          <div className="Test">
            <h2 className="Test-Header">Samantha</h2>
            <h2 className="Test-Relations">CEO and Founder of The Digital Teapot</h2>
            <p className="Test-Comment">
              "Dominic is always quick to respond and communicates really well. He's friendly, professional, and has a strong work ethic.
              He's great at solving problems efficiently and consistently goes above and beyond. His turnaround time is also impressive.
              It was a pleasure working with him and will definitely be giving him  more projects."
            </p>
          </div>
        </div>
      </section>

      <section id="our-approach" className="our-approach">
        <h2>Our Holistic Approach to Web Development</h2>
        <div className="process-steps">
          <div className="step">
            <span className="icon"></span> {/* Placeholder for actual icon */}
            <h3>Discovery & Planning</h3>
            <p>We start by understanding your business, target audience, and goals to create a tailored
              strategy.</p>
          </div>
          <div className="step">
            <span className="icon"></span> {/* Placeholder for actual icon */}
            <h3>Design & Development</h3>
            <p>Our skilled team utilises the best tools – from hardcoding for ultimate control to the
              flexibility of WordPress and Wix – to build your vision.</p>
          </div>
          <div className="step">
            <span className="icon"></span> {/* Placeholder for actual icon */}
            <h3>Optimization & Launch</h3>
            <p>We ensure your website is fast, secure, SEO-friendly, and flawlessly launched.</p>
          </div>
          <div className="step">
            <span className="icon"></span> {/* Placeholder for actual icon */}
            <h3>Ongoing Support</h3>
            <p>Our commitment extends beyond launch, with dedicated support to help you succeed online.</p>
          </div>
        </div>
      </section>

      <section id="quality-tools" className="quality-tools">
        <h2>Quality You Can Trust, Tools We Master.</h2>
        <div className="tools-used">
          <div className="tool">Hardcode</div>
          <div className="tool">WordPress</div>
          <div className="tool">Wix</div>
          <div className="tool">Xneelo</div>
        </div>
        <p>Our deep understanding of HTML, CSS, JavaScript, and platform-specific features allows us to create
          websites that are both powerful and user-friendly. With reliable hosting from Xneelo, you can be
          confident in your website's performance and security.</p>
      </section>

      <section id="call-to-action" className="call-to-action">
        <h2>Ready to Take Your Website to the Next Level?</h2>
        <p>Never let a basic website hold you back. Partner with DE Innovative Solutions and let us build a powerful
          online presence that drives results. Contact us today for a personalised consultation and quote.</p>
        {/* Use Link component for internal navigation */}
        <Link to="/quote" className="button primary large">Get Your Free Quote</Link>
      </section>
    </div>
  );
}

export default HomePage;