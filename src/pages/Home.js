// src/pages/Home.js
import React from "react";
import { ReactTyped } from "react-typed";    // SAHI IMPORT
import ParticlesBG from "../components/ParticlesBG";
import { motion, AnimatePresence } from "framer-motion";

import "./Home.css";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <ParticlesBG />
        <div className="hero-overlay" />
        <div className="hero-content">

          <h1 className="main-title">
            <span className="gradient-text">ALIVE INC</span>
          </h1>

          <p className="subtitle">
            We Build The Future With{" "}
            <ReactTyped
              strings={[
                "Blockchain",
                "Web Development",
                "AI & Machine Learning",
                "UI/UX Design",
                "Mobile Applications",
                "Cloud Solutions",
                "Your Vision",
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
              showCursor={true}
              cursorChar="|"
              className="typed-text"
            />
          </p>

          {/* SCROLL ARROW */}
          <div className="scroll-indicator-cta">
            <svg className="arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* CTA BUTTON */}
          <a href="/contact" className="cta-btn">
            Start Your Project
          </a>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>

          <div className="services-grid">
            {[
              { icon: "fas fa-code", title: "Web Development", desc: "React, Next.js, Node.js, Laravel, Django" },
              { icon: "fab fa-react", title: "Frontend Mastery", desc: "React, Vue, Angular, Tailwind" },
              { icon: "fas fa-mobile-alt", title: "Mobile Apps", desc: "React Native, Flutter, iOS, Android" },
              { icon: "fas fa-brain", title: "AI & ML", desc: "TensorFlow, Python, ChatGPT, Automation" },
              { icon: "fas fa-cube", title: "Blockchain", desc: "Ethereum, Solana, Smart Contracts, Web3" },
              { icon: "fas fa-palette", title: "UI/UX Design", desc: "Figma, Adobe XD, 3D Design" },
              { icon: "fas fa-cloud", title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes, CI/CD" },
              { icon: "fas fa-shield-alt", title: "Cyber Security", desc: "Penetration Testing, Secure Architecture" },
            ].map((service, i) => (
              <div
                key={i}
                className="service-card"
                style={{ animation: `fadeUp 0.6s ease-out forwards`, animationDelay: `${i * 0.1}s` }}
              >
                <i className={`${service.icon} service-icon`}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title white">Why Choose Alive Inc?</h2>
          <div className="why-grid">
            {[
              "10+ Years Experience",
              "500+ Projects Delivered",
              "24/7 Dedicated Support",
              "100% Client Satisfaction",
              "Cutting-Edge Technology",
              "Affordable & Transparent Pricing",
              "On-Time Delivery",
              "Free Maintenance (3 Months)",
            ].map((item, i) => (
              <div
                key={i}
                className="why-card"
                style={{ animation: `popIn 0.6s ease-out forwards`, animationDelay: `${i * 0.15}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;