// src/pages/PricingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Only Link is needed for internal navigation on this page
import '../styles/PricingPage.css'; // Import the CSS specific to this page

function PricingPage() {
  return (
    // The <main> tag here will receive the global styling from App.js's .main-content-area
    // and then its own specific styles from pricing.css
    <main id="indexpage-main" className="pricing-main">
      <section id="title">
        <h1>Pricing and Packages</h1>
      </section>

      <section id="tier">
        <div className="tier-container">

          {/* Foundation Tier */}
          <div className="tier-column Foundation">
            <h3>Foundation</h3>
            <p>Ideal for very small businesses, startups or individuals needing a basic online presence.
              Foundation focuses on a clean, responsive design with essential information.
            </p>
            <ul>
              <li>
                {/* Corrected HTML structure to avoid hydration errors: Wrap text in span */}
                <span><u>Up to 5 static pages</u></span>
                <div className="normal-list-container">
                  <ul className="normal-list">
                    <li className="normal-list-item">Home page</li>
                    <li className="normal-list-item">About Us page</li>
                    <li className="normal-list-item">Services page</li>
                    <li className="normal-list-item">Contact page</li>
                    <li className="normal-list-item">Gallery Page</li>
                  </ul>
                </div>
              </li>
              <li>Standard layout with your hardcoded HTML, CSS and Javascript</li>
              <li>Contact Form</li>
              <li>
                <span><u>Basic SEO setup</u></span>
                <div className="normal-list-container">
                  <ul className="normal-list">
                    <li className="normal-list-item">Meta Descriptions</li>
                    <li className="normal-list-item">title tages</li>
                    <li className="normal-list-item">Image alt texts</li>
                  </ul>
                </div>
              </li>
              <li>Mobile-responsive design</li>
              <li>Integration of client-provided text and images</li>
              <li>
                <span><u>Up to 2 months of Free post-launched support (If Choosen)</u></span>
                <div className="normal-list-container">
                  <ul className="normal-list">
                    <li className="normal-list-item">bug fixes</li>
                    <li className="normal-list-item">Content editing</li>
                  </ul>
                </div>
              </li>
            </ul>
            <button>From R2'000 to R8'000</button>
          </div>

          {/* Growth Tier */}
          <div className="tier-column recommended growth">
            <span className="badge">Recommended</span>
            <h3>Growth</h3>
            <p>Suited for growing small to medium-sized businesses needing a more professional and feature-rish
              website</p>
            <ul>
              <li>Up to 15 pages with more complex layouts</li>
              <li>Custom design elements and branding integration</li>
              <li>Contact forms with more fields or specific functionality</li>
              <li>Basic blog setup or news section</li>
              <li>Social media inegration</li>
              <li>
                <span><u>Enhanced SEO Optimization</u></span>
                <div className="normal-list-container">
                  <ul className="normal-list">
                    <li className="normal-list-item">Keyword research basics</li>
                    <li className="normal-list-item">Sitemap creation</li>
                  </ul>
                </div>
              </li>
              <li>Mobile-responsive design</li>
              <li>Inegration of client-provided content</li>
              <li>Up to 4 months of FREE post-launch support and minor updates (If Choosen)</li>
            </ul>
            <button>From R9'000 to R19'000</button>
          </div>

          {/* Evolved Tier */}
          <div className="tier-column evolved">
            <h3>Evolved</h3>
            <p>For businesses requiring advanced features, custom functionality or e-commerce capabilites</p>
            <ul>
              <li>15+ pages with unique and complex designs</li>
              <li>Custom-built features using PHP and potentially Python for backend logic.</li>
              <li>
                <span><u>E-commerce integration</u></span>
                <div className="normal-list-container">
                  <ul className="normal-list">
                    <li className="normal-list-item">Shopping cart</li>
                    <li className="normal-list-item">product listing</li>
                    <li className="normal-list-item">Payment gateway setup (this option is complex and can
                      raise
                      the cost)</li>
                  </ul>
                </div>
              </li>
              <li>Content Management System integration for easier client updates</li>
              <li>Advanced SEO strategies</li>
              <li>Database integration</li>
              <li>Mobile-responsive design</li>
              <li>Up to 6 months of post-launch support and maintenance options (If Choosen)</li>
            </ul>
            <button>From R20'000+</button>
          </div>
        </div>
      </section>

      <section className="get-a-quote">
        <Link to="/quote" className="button primary large">Get Your Free Quote</Link>
      </section>
    </main>
  );
}

export default PricingPage;
