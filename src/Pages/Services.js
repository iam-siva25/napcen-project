import "./ProductPage.css";
import service1 from "../assets/images/slide1.jpg"; // Ensure the path is correct
import service2 from "../assets/images/slide2.jpg";

const Services = () => {
  return (
    <main className="product-page">
      {/* 🌟 Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Professional Services</h1>
          <p>Empower your business with our expert IT services.</p>
        </div>
      </section>

      {/* 📦 Services Content */}
      <section className="product-content">
        <div className="product-grid">
          {/* 🛠️ Service Card 1 */}
          <div className="product-card">
            <img src={service1} alt="IT Consultation" className="product-img" />
            <div className="product-info">
              <h3>IT Consultation</h3>
              <p>Optimize your IT infrastructure with expert guidance.</p>
            </div>
          </div>

          {/* 🔒 Service Card 2 */}
          <div className="product-card">
            <img
              src={service2}
              alt="Cybersecurity Solutions"
              className="product-img"
            />
            <div className="product-info">
              <h3>Cybersecurity Solutions</h3>
              <p>Protect your business with top-tier security measures.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
