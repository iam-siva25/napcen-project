import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="contact-page">
      <h2>📞 Get in Touch</h2>
      <p>Have any questions? We’d love to hear from you.</p>

      <form ref={formRef} className={`contact-form ${isVisible ? "visible" : ""}`}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">🚀 Send Message</button>
      </form>
    </main>
  );
};

export default Contact;
