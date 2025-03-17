import "./ProductPage.css";
import software1 from "../assets/images/slide1.jpg"; // Ensure these paths are correct
import software2 from "../assets/images/slide2.jpg";

const Software = () => {
  return (
    <main className="product-page">
      {/* 🌟 Hero Section */}
      <section className="hero-section software-hero">
        <div className="overlay">
          <h1>Software Solutions</h1>
          <p>Transform your business with our cutting-edge software.</p>
        </div>
      </section>

      {/* 📦 Software Content */}
      <section className="product-content">
        <div className="product-grid">
          {/* ☁️ Cloud ERP */}
          <div className="product-card">
            <img src={software1} alt="Cloud-Based ERP" className="product-img" />
            <div className="product-info">
              <h3>Cloud-Based ERP</h3>
              <p>Manage your business efficiently with our cloud ERP software.</p>
            </div>
          </div>

          {/* 🤖 AI Analytics */}
          <div className="product-card">
            <img src={software2} alt="AI-Powered Analytics" className="product-img" />
            <div className="product-info">
              <h3>AI-Powered Analytics</h3>
              <p>Gain deep insights into your business with AI-driven analytics.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Software;
