import React, { useState } from "react";
import { ReactTyped } from "react-typed";  
import { motion, AnimatePresence } from "framer-motion";
import "./Portfolio.css";

const projects = [
  {
    title: "CryptoVerse Pro",
    category: "Blockchain • Web3 • DeFi",
    desc: "Next-Gen Decentralized Exchange with 100k+ TVL",
    tech: "React • Solidity • Web3.js • Tailwind",
    img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80",
    live: "#",
    glow: "cyan",
  },
 {
  title: "AI Nexus Dashboard",
  category: "AI • Machine Learning • SaaS",
  desc: "Real-time AI Analytics Platform for Enterprises",
  tech: "Next.js • Python • TensorFlow • AWS",
  img: "/images/myphoto.jpg",  // Aapki personal photo ya project screenshot
  live: "#",
  glow: "purple",
}
,
  {
    title: "AlivePay Wallet",
    category: "Mobile • Blockchain • FinTech",
    desc: "Multi-Chain Crypto Wallet with 500k+ Downloads",
    tech: "React Native • Solana • Firebase",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    live: "#",
    glow: "pink",
  },
  {
    title: "Quantum E-Commerce",
    category: "Web • Shopify • 3D Design",
    desc: "3D Product Viewer + AR Try-On Store",
    tech: "Three.js • Shopify • Framer Motion",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    live: "#",
    glow: "green",
  },
  {
    title: "NeuralMind AI",
    category: "AI • ChatGPT • Automation",
    desc: "Custom AI Assistant for 100+ Companies",
    tech: "OpenAI • Node.js • React • Voiceflow",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    live: "#",
    glow: "orange",
  },
  {
    title: "MetaVerse Office",
    category: "Metaverse • 3D • VR Ready",
    desc: "Virtual Office for Remote Teams in Metaverse",
    tech: "A-Frame • WebXR • Socket.io",
    img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=800&q=80",
    live: "#",
    glow: "blue",
  },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="portfolio-monster">
      {/* HERO SECTION */}
      <section className="portfolio-hero">
        <motion.div className="hero-content">
          <h1 className="portfolio-mega-title">
            OUR <span className="glow-red">PORTFOLIO</span>
          </h1>
          <p className="portfolio-subtitle">
            <ReactTyped
              strings={[
                "500+ Projects Delivered",
                "15+ Countries Served",
                "100% Client Satisfaction",
                "Alive Inc = Pure Magic",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>
        </motion.div>
      </section>

      {/* PROJECTS GRID */}
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 200, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
              whileHover={{ y: -40, rotateY: 15, rotateX: 10, scale: 1.08, zIndex: 100 }}
              onClick={() => setSelectedImage(project.img)}
              className={`project-card card-${project.glow}`}
            >
              <div className="card-image">
                <img src={project.img} alt={project.title} />
                <div className="card-overlay">
                  <motion.div whileHover={{ scale: 1.3 }} className="view-btn">
                    Click to Zoom
                  </motion.div>
                </div>
              </div>

              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="category">{project.category}</p>
                <p className="desc">{project.desc}</p>
                <p className="tech">{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="image-modal"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="zoomed-image"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
