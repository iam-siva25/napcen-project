import { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImage from "../assets/images/header-bg.mp4.mov"; // Replace with actual image

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Discover who we are and what drives us forward.</p>
        </div>
      </section>

      {/* Company Details Section */}
      <section ref={aboutRef} className={`company-details ${isVisible ? "visible" : ""}`}>
        <div className="text-section">
          <h2>🏢 Who We Are</h2>
          <p>
            We are a leading technology company delivering innovative solutions that empower businesses.
          </p>
          <h3>📌 Our Mission</h3>
          <p>
            To provide cutting-edge digital services that drive transformation and efficiency.
          </p>
          <h3>🚀 Why Choose Us?</h3>
          <ul>
            <li>✅ Over 10+ years of industry experience</li>
            <li>✅ Trusted by 500+ global clients</li>
            <li>✅ Expertise in AI, Cloud, and Digital Solutions</li>
          </ul>
        </div>
        <div className="image-section">
          <img src={aboutImage} alt="About Us" />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>👨‍💼 Meet Our Team</h2>
        <p>We have a team of passionate professionals who bring innovation to life.</p>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="CEO" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="CTO" />
            <h3>Jane Smith</h3>
            <p>CTO & Tech Lead</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="CMO" />
            <h3>Michael Johnson</h3>
            <p>CMO & Marketing Head</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
