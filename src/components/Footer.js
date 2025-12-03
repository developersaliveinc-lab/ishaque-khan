import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="alive-footer">
      {/* Footer Main Sections */}
      <div className="footer-sections">
        {/* Quick Links */}
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>IT Service Provider Company In India</li>
            <li>Website Design in India</li>
            <li>Mobile App Development in India</li>
            <li>Business Branding Development in India</li>
            <li>Web Security in India</li>
            <li>Technical Support in India</li>
            <li>Digital Marketing in India</li>
            <li>Blockchain / Crypto Development in India</li>
            <li>MLM Software Development in India</li>
            <li>OTT Platform Development in India</li>
            <li>UI/UX Design</li>
            <li>CRM/CMS</li>
            <li>Artificial Intelligence (AI)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Alive Inc - Head Office</h3>
          <p>📞 +91 9324745058</p>
          <p>✉️ <a href="mailto:info@aliveinc.in">info@aliveinc.in</a></p>
          <p>📍 F-85, 1st Floor, Nano-Wing, Fantasia Business Park, Near Inorbit Mall, Sector-30A, Vashi, Navi-Mumbai</p>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="https://linkedin.com/in/ishaque-shaikh-2004" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://instagram.com/ishaque.2004" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://wa.me/919324745058" target="_blank" rel="noopener noreferrer">wa</a>
            <a href="https://facebook.com/ishaque.shaikh.2004" target="_blank" rel="noopener noreferrer">fb</a>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="footer-logo-section">
        <img src="/images/footer-logo.png" alt="Alive Inc Logo" className="footer-logo" />
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {year} Alive Inc. All Rights Reserved</p>
        <p>Websites: metungtech.com | slot938.com | thaicasinobin.com | jqk41.com | thaibet55.com | kuyuluk.com | soccer918.com | huc999.casino | krooree.com | slot5599.com</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link> | <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>

      {/* SCROLL-TO-TOP BUTTON PURA HATA DIYA GAYA HAI */}
    </footer>
  );
};

export default Footer;