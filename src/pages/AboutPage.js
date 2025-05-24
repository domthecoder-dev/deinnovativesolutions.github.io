// src/pages/AboutPage.js
import React from 'react';
import Sam from '../Images/Samantha-Avatar.jpg';
import Dom from '../Images/Dominic-Avatar.jpg';
import Image2 from '../Images/Girlsittingatcomputercoding.jpg';
import Image3 from '../Images/HandsCodingOnLaptop.jpg';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/AboutPage.css'; // Import the About Us page specific CSS

// Assuming your images are in the public/Images folder
// If they are in src/Images, you would import them like:
// import samanthaAvatar from '../Images/Samantha-Avatar.jpg';
// import dominicAvatar from '../Images/Dominic-Avatar.jpg';
// import girlCoding from '../Images/Girlsittingatcomputercoding.jpg';
// import handsCoding from '../Images/HandsCodingOnLaptop.jpg';

function AboutPage() {
  return (
    // React components usually return a single root element.
    // We'll wrap all your sections in a div to align with the main structure in App.js
    <div id="aboutuspage-main-wrapper" className="about-us-main"> {/* Use the class for main styling */}
      <div className="container">
        <section id="Meet-the-team">
          <h1 className="section-header">Meet the Team</h1>
          <div className="team-member">
            <div className="avatar-container">
              {/* Image paths adjusted for public folder */}
              <img src={Sam} className='avatar' alt="Samantha Avatar" />
            </div>
            <div className="bio">
              <h3>Samantha</h3>
              <p className="body-text">
                Your dedicated point of contact and the administrator
                who keeps our web development process seamless.
                She is committed to supporting you through every step,
                ensuring you get the ideal website to meet your online
                aspirations...
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="avatar-container">
              {/* Image paths adjusted for public folder */}
              <img src={Dom} className="avatar" alt="Dominic Avatar" />
            </div>
            <div className="bio">
              <h3>Dominic</h3>
              <p className="body-text">
                Your go-to Website Developer for personalised solutions. He is committed to hard
                work and building a website that perfectly reflects your preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="about-intro">
          <div className="image-column">
            {/* Image paths adjusted for public folder */}
            <img src={Image2} id="Img-GirlCoding" alt="Girl coding on a computer" />
          </div>
          <div className="text-column">
            <h1 className="page-header">Crafting Your Digital Presence with Expertise and Care</h1>
            <p className="body-text">
              At DE Innovative Solutions, we are passionate about building effective and
              visually stunning websites that help our clients achieve their
              online goals. Unlike DIY platforms, we offer a personalised,
              hands-on approach, leveraging the power of WordPress and reliable
              hosting from Xneelo to create a unique digital presence tailored
              to your specific needs.
            </p>
            <p className="body-text">
              For over five years, I, Dominic the founder of DE Innovative Solutions, have been dedicated
              to the art and science of web development. I believe that a website is
              more than just a digital address – it is a crucial tool for communication,
              growth, and establishing your brand identity. That is why I go beyond the
              basics, utilizing coding languages like CSS and HTML to implement advanced
              meta tags for enhanced SEO and to create truly personalised and customised
              designs that stand out.
            </p>
            <p className="body-text">
              My commitment to excellence is backed by certifications in Responsive Web Design
              and JavaScript from freeCodeCamp.org, ensuring that your website is not only beautiful
              but also user-friendly across all devices and built with modern web standards in mind.
            </p>
            <p className="body-text">
              Understanding that exceptional customer care is paramount, I work closely with a dedicated
              assistant who is committed to providing you with seamless support and addressing any questions
              or concerns you may have throughout the website development process and beyond.
            </p>
          </div>
        </section>

        <section className="what-sets-apart">
          <div className="text-column">
            <h1 className="section-header">What Sets Us Apart:</h1>
            <ul className="features-list">
              <li>Expert WordPress Development: We harness the flexibility and power of WordPress to build robust and scalable websites.</li>
              <li>Reliable Xneelo Hosting: We partner with Xneelo, a trusted hosting provider, to ensure your website is fast, secure, and always accessible.</li>
              <li>Personalized Customization: We go beyond themes, using CSS and HTML to create unique designs and implement specific functionalities tailored to your brand.</li>
              <li>SEO Optimization from the Ground Up: We integrate strategic meta tags and semantic HTML to improve your website's visibility in search engine results.</li>
              <li>Responsive Design Expertise: Your website will look and function flawlessly on desktops, tablets, and mobile devices.</li>
              <li>Dedicated Customer Care: Our team is committed to providing you with exceptional support every step of the way.</li>
              <li>Proven Experience: With over five years of experience, we have a track record of delivering successful web solutions.</li>
            </ul>
          </div>
          <div className="image-column">
            {/* Image paths adjusted for public folder */}
            <img src={Image3} className="coding-laptop-img" alt="Hands coding on a laptop" />
          </div>
        </section>

        <section className="websites-we-build">
          <h1 className="section-header">What Websites Do we Build?</h1>
          <p className="body-text">
            We build all kinds of websites, including:
          </p> {/* Close the paragraph here */}
          <ul className="list"> {/* Now <ul> is a sibling of <p> */}
            <li className="list-item">Blogs</li>
            <li className="list-item">Personal Profiles</li>
            <li className="list-item">Galleries</li>
            <li className="list-item">E-Commerce</li>
            <li className="list-item">Contact Forms</li>
            <li className="list-item">And More!</li>
          </ul>
          <p className="body-text">
            Contact us for your <Link to="/quote">personalised quote</Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
