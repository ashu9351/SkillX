import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "Contact Us";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      {/* Large Logo Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          background: "black",
        }}
      >
        <img
          src="/images/skillexlogo_resized.png"
          alt="SkillEX Abroad Logo"
          className="logo-hover"
          style={{
            width: "50%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">
          Get in touch with us for any questions or inquiries
        </p>
      </div>

      {/* Contact form with location fields */}
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <ContactForm showLocationFields={true} />
      </div>
    </div>
  );
};

export default Contact;
