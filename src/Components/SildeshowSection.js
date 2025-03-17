import { useState, useEffect, useRef } from "react";
import "./SlideshowSection.css";

const SlideshowSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const sectionRef = useRef(null);

  const slides = [
    {
      image: process.env.PUBLIC_URL + "/images/slide1.jpg",
      title: "Innovate with Confidence",
      subtitle: "Unlock new possibilities with cutting-edge solutions.",
      description:
        "We bring futuristic technology and seamless integration to help your business stay ahead of the curve.",
      buttonText: "Learn More",
      buttonLink: "/about",
    },
    {
      image: process.env.PUBLIC_URL + "/images/slide2.jpg",
      title: "Transform Your Business",
      subtitle: "Empower your brand with state-of-the-art tools.",
      description:
        "From AI-powered automation to advanced analytics, our solutions redefine efficiency and growth.",
      buttonText: "Get Started",
      buttonLink: "/services",
    },
    {
      image: process.env.PUBLIC_URL + "/images/slide3.jpg",
      title: "Achieve More",
      subtitle: "Seamless integration for maximum efficiency.",
      description:
        "Optimize workflows, boost productivity, and stay ahead in a competitive landscape.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  ];

  useEffect(() => {
    const startSlideshow = () => {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    startSlideshow();

    return () => clearInterval(slideInterval.current);
  }, [slides.length]);

  return (
    <section ref={sectionRef} className="slideshow-section">
      {/* Slide Container */}
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <h3>{slide.subtitle}</h3>
              <p>{slide.description}</p>
              <a href={slide.buttonLink} className="slide-button">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="prev-button"
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
      >
        &#10094;
      </button>
      <button
        className="next-button"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        &#10095;
      </button>

      {/* Bullet Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default SlideshowSection;
