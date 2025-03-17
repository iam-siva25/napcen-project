import { useState, useEffect, useRef } from "react";
import "./ImageContentSection.css";

const ImageContentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const contentItems = [
    {
      image: "/images/slide1.jpg",
      title: "🚀 Digital Transformation",
      text: "Empower your business with AI-driven automation and innovative solutions.",
      icon: "💡",
      buttonText: "Discover More",
      buttonLink: "/digital-transformation",
    },
    {
      image: "/images/slide2.jpg",
      title: "☁️ Cloud Infrastructure",
      text: "Leverage secure and scalable cloud solutions to enhance efficiency and collaboration.",
      icon: "🔗",
      buttonText: "Explore Services",
      buttonLink: "/cloud",
    },
    {
      image: "/images/slide3.jpg",
      title: "📊 AI & Data Analytics",
      text: "Harness the power of AI-driven insights to optimize performance.",
      icon: "📈",
      buttonText: "Get Insights",
      buttonLink: "/ai-analytics",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`image-content-section ${isVisible ? "visible" : ""}`}>
      <div className="section-header">
        <h2 className="animated-title">🌍 Our Cutting-Edge Solutions</h2>
        <p>Transforming businesses with next-gen technology and innovation.</p>
      </div>

      <div className="content-grid">
        {contentItems.map((item, index) => (
          <div key={index} className="content-item">
            <div className="image-container">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="image-overlay">{item.icon}</div>
            </div>
            <div className="text-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.buttonLink} className="learn-more">
                {item.buttonText} ➜
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageContentSection;
