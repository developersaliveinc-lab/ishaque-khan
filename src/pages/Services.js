import React, { useState, useEffect, useRef } from "react";
import { Typed } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";

// ===== TYPED HERO =====
const TypedHero = ({ strings }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, [strings]);

  return <span ref={el}></span>;
};

// ===== SERVICE SLIDES =====
const serviceSlides = [
  {
    title: "WEB DEVELOPMENT",
    subtitle: "React • Next.js • Node • Laravel • Full Stack",
    desc: "We Build Websites That Break The Internet",
    icon: "fas fa-code",
    gradient: "from-cyan-400 via-blue-600 to-purple-700",
  },
  {
    title: "BLOCKCHAIN & WEB3",
    subtitle: "Ethereum • Solana • Smart Contracts • NFTs • DeFi",
    desc: "Your Gateway To Decentralized Future",
    icon: "fas fa-link",
    gradient: "from-purple-600 via-pink-600 to-red-700",
  },
  {
    title: "AI & MACHINE LEARNING",
    subtitle: "ChatGPT • TensorFlow • Python • Automation • Neural Networks",
    desc: "Intelligence That Evolves With You",
    icon: "fas fa-brain",
    gradient: "from-orange-500 via-red-600 to-pink-700",
  },
  {
    title: "MOBILE APPLICATIONS",
    subtitle: "React Native • Flutter • iOS • Android • Cross Platform",
    desc: "Apps That Live In Every Pocket",
    icon: "fas fa-mobile-alt",
    gradient: "from-green-400 via-emerald-600 to-teal-700",
  },
  {
    title: "UI/UX DESIGN",
    subtitle: "Figma • Framer • 3D • Motion • Branding • Animation",
    desc: "Designs That Don't Just Look — They Feel Alive",
    icon: "fas fa-palette",
    gradient: "from-pink-500 via-rose-600 to-purple-700",
  },
  {
    title: "CLOUD & DEVOPS",
    subtitle: "AWS • Docker • Kubernetes • CI/CD • Microservices",
    desc: "Scale Infinitely — Sleep Peacefully",
    icon: "fas fa-cloud",
    gradient: "from-indigo-600 via-purple-700 to-blue-800",
  },
  {
    title: "DIGITAL MARKETING",
    subtitle: "SEO • SMM • PPC • Content Marketing • Branding",
    desc: "Grow Your Business Online Efficiently",
    icon: "fas fa-bullhorn",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    title: "CRM & CMS SOLUTIONS",
    subtitle: "WordPress • Shopify • Custom CMS • CRM Platforms",
    desc: "Manage Your Business Seamlessly",
    icon: "fas fa-cogs",
    gradient: "from-green-300 via-blue-400 to-purple-500",
  },
];

// ===== TESTIMONIALS =====
const testimonials = [
  {
    name: "Rahul Sharma",
    position: "CEO, TechCorp",
    feedback:
      "Alive Inc transformed our web presence into a digital empire. Their dev team is unmatched!",
    photo: "https://i.imgur.com/3m9oYvL.jpg",
  },
  {
    name: "Priya Singh",
    position: "CTO, Webify",
    feedback:
      "Professional, creative, and fast! AI integration and blockchain solutions were mind-blowing.",
    photo: "https://i.imgur.com/2kF8jPq.jpg",
  },
];

// ===== TECHNOLOGIES =====
const technologies = [
  "React", "Next.js", "Node.js", "Laravel", "React Native", "Flutter", "AWS",
  "Docker", "Kubernetes", "Python", "Figma", "Framer", "SEO", "AI/ML"
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % serviceSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Swipe gestures
  const handleTouchStart = (e) => (touchStart.current = e.changedTouches[0].clientX);
  const handleTouchEnd = (e) => {
    touchEnd.current = e.changedTouches[0].clientX;
    if (touchStart.current - touchEnd.current > 50)
      setCurrent((prev) => (prev + 1) % serviceSlides.length);
    if (touchEnd.current - touchStart.current > 50)
      setCurrent((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);
  };

  return (
    <div className="services-monster">

      {/* HERO SLIDER */}
      <div className="slider-monster" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="slide-monster"
          >
            <div className={`slide-bg bg-gradient-to-br ${serviceSlides[current].gradient}`} />
            <motion.div className="content-monster">
              <motion.h1
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, type: "spring" }}
                className="mega-title"
              >
                {serviceSlides[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mega-subtitle"
              >
                <TypedHero strings={[serviceSlides[current].subtitle]} />
              </motion.p>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, type: "spring", stiffness: 80 }}
                className="mega-desc"
              >
                {serviceSlides[current].desc}
              </motion.p>
            </motion.div>

            {/* DOTS */}
            <div className="dots-monster">
              {serviceSlides.map((_, i) => (
                <motion.div
                  key={i}
                  className={`dot-big ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                  whileHover={{ scale: 1.5 }}
                  animate={{ scale: i === current ? 1.4 : 1 }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SERVICES GRID */}
      <section className="all-services">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="all-services-title"
          >
            Every Service You Need — Under One Roof
          </motion.h2>

          <div className="services-grid-big">
            {serviceSlides.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  scale: 1.08,
                  y: -20,
                  rotate: 2,
                  boxShadow: "0 0 80px rgba(0,255,255,0.6)",
                }}
                className="service-mega-card"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1.2 }} className="mega-icon">
                  <i className={service.icon}></i>
                </motion.div>
                <h3>{service.title}</h3>
                <p className="tech">{service.subtitle}</p>
                <p className="desc">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA SERVICES HIGHLIGHT */}
      <section className="extra-services">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Highlight Services
        </motion.h2>
        <div className="extra-services-grid">
          {serviceSlides.map((service, i) => (
            <motion.div
              key={i}
              className="extra-service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="tech-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="tech-title"
          >
            Technologies We Use
          </motion.h2>
          <div className="tech-grid">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                className="tech-card"
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px #ff0000" }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testimonial-card" whileHover={{ scale: 1.05 }}>
                <div className="testimonial-img">
                  <img src={t.photo} alt={t.name} />
                </div>
                <p className="feedback">"{t.feedback}"</p>
                <h4>{t.name}</h4>
                <p className="position">{t.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="cta-title"
          >
            Ready to Build Your Digital Empire?
          </motion.h2>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="cta-button"
          >
            Get a Quote
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Services;
