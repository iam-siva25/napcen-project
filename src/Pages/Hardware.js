import "./ProductPage.css";

const Hardware = () => {
  return (
    <main className="product-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Hardware Products</h1>
          <p>Explore our high-performance hardware solutions for enterprises.</p>
        </div>
      </section>

      {/* Product Content Section */}
      <section className="product-content">
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/hardware1.jpg" alt="Hardware 1" className="product-img" />
            <div className="product-info">
              <h3>High-Speed Servers</h3>
              <p>Reliable and scalable servers for your IT infrastructure.</p>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/hardware2.jpg" alt="Hardware 2" className="product-img" />
            <div className="product-info">
              <h3>Networking Solutions</h3>
              <p>Advanced networking equipment to enhance connectivity.</p>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/hardware3.jpg" alt="Hardware 3" className="product-img" />
            <div className="product-info">
              <h3>Secure Storage Systems</h3>
              <p>Efficient data storage solutions with top-tier security.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hardware;
