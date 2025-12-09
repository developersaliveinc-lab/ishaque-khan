import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";

// ===== FOUNDER PHOTO =====
const ishaquePhoto = "/images/ishaque.jpg";

// ===== TEAM MEMBERS =====
const teamMembers = [
  { name: "Rahul Sharma", role: "Lead Developer", photo: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Priya Singh", role: "UI/UX Designer", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Aman Verma", role: "Blockchain Expert", photo: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "Neha Kapoor", role: "Project Manager", photo: "https://randomuser.me/api/portraits/women/56.jpg" },
  { name: "Siddharth Roy", role: "AI Specialist", photo: "https://randomuser.me/api/portraits/men/77.jpg" },
  { name: "Ananya Mehta", role: "Frontend Developer", photo: "https://randomuser.me/api/portraits/women/33.jpg" },
];

// ===== PARTNERS =====
const partners = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
];

// ===== SLIDES =====
const slides = [
  { title: "We Are ALIVE INC", subtitle: "Building Digital Empires Since 2018", desc: "500+ Projects • 50+ Experts • 15+ Countries" },
  { title: "Ishaque Khan", subtitle: "The Visionary Founder", desc: "From Vashi to Global Domination" },
  { title: "We Build The Future", subtitle: "AI • Blockchain • Web3 • Apps", desc: "Not just code, we build legacies" },
  { title: "Your Success Is Our Mission", subtitle: "Client First • Always", desc: "Every project is personal" },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-master">

      {/* ===== HERO SLIDER ===== */}
      <section className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="slide"
          >
            <div className="slide-bg" />
            <motion.div className="slide-content">
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="slide-title"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="slide-subtitle"
              >
                <ReactTyped
                  strings={[slides[currentSlide].subtitle]}
                  typeSpeed={60}
                  showCursor={true}
                  backSpeed={30}
                  loop
                />
              </motion.p>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="slide-desc"
              >
                {slides[currentSlide].desc}
              </motion.p>
            </motion.div>
            <div className="slider-dots">
              {slides.map((_, i) => (
                <motion.div
                  key={i}
                  className={`dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(i)}
                  whileHover={{ scale: 1.4 }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ===== OUR EXPERTISE ===== */}
      <section className="services-section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Our Expertise
          </motion.h2>

          <div className="services-grid">
            {[
              { icon: "fas fa-code", title: "Web Development", desc: "React, Next.js, Node.js, Laravel, Django" },
              { icon: "fab fa-react", title: "Frontend Mastery", desc: "React, Vue, Angular, Tailwind, Framer Motion" },
              { icon: "fas fa-mobile-alt", title: "Mobile Apps", desc: "React Native, Flutter, iOS, Android" },
              { icon: "fas fa-brain", title: "AI & ML", desc: "TensorFlow, Python, ChatGPT, Automation" },
              { icon: "fas fa-cube", title: "Blockchain", desc: "Ethereum, Solana, Smart Contracts, Web3" },
              { icon: "fas fa-palette", title: "UI/UX Design", desc: "Figma, Adobe XD, 3D Design, Animation" },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15, scale: 1.05 }}
              >
                <i className={`${service.icon} service-icon`}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="founder-section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            The Man Behind ALIVE INC
          </motion.h2>

          <div className="founder-card">
            <div className="founder-photo">
              <img src={ishaquePhoto} alt="Ishaque Khan" />
              <div className="photo-glow"></div>
            </div>

            <div className="founder-info">
              <h3>Abid Pathan Sarfuddin
              </h3>
              <p className="role">Senior Web Developer & CEO</p>
              <p className="bio">
                Started from a small room in Vashi with just a laptop and unbreakable willpower.
                Today leading a team of 50+ warriors serving clients in 15+ countries.
                <br /><br />
                <strong>"I don't sell websites. I build digital empires."</strong>
              </p>
              <div className="founder-social">
                <a href="https://instagram.com/ishaque.2004" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/in/ishaque-shaikh-2004" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://wa.me/919324745058" target="_blank" rel="noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="team-section">
        <div className="container">
          <motion.h2 className="section-title gradient-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Meet The Squad
          </motion.h2>
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-card">
                <div className="member-photo">
                  <img src={member.photo} alt={member.name} />
                  <div className="overlay"><p>{member.role}</p></div>
                </div>
                <h3>{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="partners-section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Trusted By The Best
          </motion.h2>
          <div className="partners-grid">
            {partners.map((partner, i) => (
              <div key={i} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="container">
          <h2 className="glow-text">Your Empire Starts Here</h2>
          <a href="https://wa.me/919324745058" target="_blank" rel="noreferrer" className="cta-final">
            Let's Build Something Legendary
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;
