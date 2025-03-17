import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // NEW IMPORT

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Fix: Use `loadSlim` instead of `loadFull`
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#1a1a2e",
        },
        particles: {
          number: { value: 100 },
          color: { value: ["#ff0099", "#00ff99", "#0099ff"] },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 1, max: 5 } },
          move: { enable: true, speed: 2 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
