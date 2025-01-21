import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import JobsBanner from './JobsBanner';
import ServiceBanner from './ServiceBanner';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import TranslationButton from './TranslateButton';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close the menu after navigation (optional)
  };

  return (
    <div>
      {/* HEADER SECTION */}
      <header>
        <div className="company-logo">
          <img src="/JobHub Logo.png" alt="PageLogo" />
        </div>
        <nav className={`navbar ${menuOpen ? 'show-navbar' : ''}`}>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/Login" className="nav-link">Find Jobs</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">Post Jobs</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <a
                href="#aboutus"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('aboutus');
                }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contactus"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contactus');
                }}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">SignIn/up</Link>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <i
            className={`bx bx-menu ${menuOpen ? 'hide-bx' : ''}`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Open menu"
          ></i>
          <i
            className={`bx bx-x ${menuOpen ? 'show-bx' : ''}`}
            onClick={toggleMenu}
            aria-expanded={!menuOpen}
            aria-label="Close menu"
          ></i>
        </div>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main>
        <section className="Home_banner">
          <div className="Home_banner-image">
            <img src="/Animated_pic.png" alt="Home_Banner" />
          </div>
          <div className="Home_banner-content">
            <h1>Welcome to JobHub</h1>
            <p>
              Discover amazing features, services, and opportunities. Join us and
              explore the endless possibilities!
            </p>
            <button className="Home_explore-button">Explore</button>
          </div>
        </section>
        <section className="services">
          <div className="service">
            <div className="service-icon">🍽️</div>
            <div className="service-name">Catering</div>
          </div>
          <div className="service">
            <div className="service-icon">📢</div>
            <div className="service-name">Job Postings</div>
          </div>
          <div className="service">
            <div className="service-icon">🔍</div>
            <div className="service-name">Job Findings</div>
          </div>
          <div className="service">
            <div className="service-icon">📂</div>
            <div className="service-name">Categories</div>
          </div>
        </section>
        <JobsBanner />
        <ServiceBanner />
        {/* About Us Section */}
        <section id="aboutus">
          <AboutUs />
        </section>

        {/* Contact Us Section */}
        <section id="contactus">
          <ContactUs />
        </section>
      </main>
      <TranslationButton />
    </div>
  );
};

export default Header;
