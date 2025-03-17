import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SlideshowSection from "./SildeshowSection";
import ImageContentSection from "./ImageContentSection";
import heroVideo from "../assets/images/header-bg.mp4.mov";
import ParticlesBackground from "./ParticlesBackground";


const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideo = () => {
      videoElement.play().catch((error) => {
        videoElement.controls = true;
        console.log("Autoplay blocked:", error);
      });
    };

    videoElement.addEventListener("loadedmetadata", handleVideo);
    videoElement.addEventListener("error", (e) => {
      console.error("Video error:", e.target.error);
    });

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleVideo);
    };
  }, []);

  return (
    <main className="home-page">
      {/* 🚀 Hero Section with Video Background */}
      <section className="hero-section">
        <div className="video-container">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="hero-video"
            poster={`${process.env.PUBLIC_URL}/images/video-poster.jpg`}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="video-overlay" />
        </div>

        {/* 🌟 Hero Content */}
        <div className="hero-content">
          <div className="hero-content-inner">
            <h1 className="hero-title">Revolutionize Your Business</h1>
            <p className="hero-subtitle">
              Next-level innovation for modern challenges.
            </p>
            <div className="cta-button-group">
              <Link to="/products" className="cta-button primary">
                Explore Products
              </Link>
              <Link to="/contact" className="cta-button secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🎡 Sections */}
      <ParticlesBackground />
      <SlideshowSection />
      <ImageContentSection />
    </main>
  );
};

export default Home;
