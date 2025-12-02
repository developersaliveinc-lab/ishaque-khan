import React, { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBG = () => {
  const options = useMemo(() => ({
    background: { color: { value: "#000000" } },
    fpsLimit: 120,
    particles: {
      number: { value: 100 },
      color: { value: "#00ffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      links: { enable: true, distance: 150, color: "#00ffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100 } }
    },
    detectRetina: true
  }), []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBG;   // YE LINE ZAROORI HAI BHAI!