import React, { useState } from "react";

import { ReactTyped } from "react-typed";
import "./Contact.css";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert(
      "Thank You! Your message has been sent. Alive Inc will contact you within 24 hours!"
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-monster">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <motion.div className="hero-content">
          <h1 className="contact-mega-title">
            LET'S MAKE <span className="glow-cyan">MAGIC</span> TOGETHER
          </h1>
          <p className="contact-subtitle">
            <ReactTyped
              strings={[
                "Ready to launch your dream project?",
                "Need Blockchain, AI, Web, Mobile?",
                "Alive Inc is just one message away!",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>
        </motion.div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="contact-main">
        <div className="contact-container">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="contact-form-section vibrant-form"
          >
            <h2 className="form-title">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="send-btn"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="contact-info-section vibrant-info"
          >
            <h2 className="info-title">Visit Our Office</h2>
            <div className="address-card">
              <h3>Alive Inc Headquarters</h3>
              <p>
                Fantasia Nano Wing, <br />
                Sector 30A, Vashi, <br />
                Navi Mumbai, Maharashtra 400703, India
              </p>
              <p>
                <strong>Email:</strong> hello@aliveinc.in <br />
                <strong>Phone:</strong> +91 88284 88284
              </p>
            </div>

            {/* GOOGLE MAP */}
            <div className="map-container">
              <iframe
                title="Alive Inc Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.785480233331!2d72.99556661475833!3d19.07292798708679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5b2e3b6d4c7%3A0x9d8f8e8f8e8f8e8f!2sFantasia%20Business%20Park!5e0!3m2!1sen!2sin!4v1698000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="final-cta"
      >
        <h2>
          <span className="mega-glow">Your Vision + Our Code = Unstoppable</span>
        </h2>
        <p>Let’s build the future. Together.</p>
      </motion.div>
    </div>
  );
};

export default Contact;
