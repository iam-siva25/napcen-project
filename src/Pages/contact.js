import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="contact-page">
      <section className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Fill out the form below.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              {submitted ? "Sent! ✅" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Contact Information */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>📍 123 Innovation Street, Tech City, USA</p>

          <h3>Email</h3>
          <p>📧 support@mycompany.com</p>

          <h3>Phone</h3>
          <p>📞 +1 (123) 456-7890</p>

          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon fb">🔵 Facebook</a>
            <a href="#" className="icon tw">🔷 Twitter</a>
            <a href="#" className="icon in">🔗 LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
