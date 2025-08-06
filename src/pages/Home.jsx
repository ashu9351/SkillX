import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const Home = () => {
  const [showContactPopup, setShowContactPopup] = useState(false)

  const services = [
    {
      title: "Acquire Skills",
      description: "Master in-demand skills with our comprehensive certification programs and expert-led courses.",
      icon: "🎓",
      link: "/courses"
    },
    {
      title: "Get Dream Job",
      description: "Find your dream job with leading companies across various industries and domains.",
      icon: "💼",
      link: "/jobs"
    },
    {
      title: "Grow with Us",
      description: "Join our network of partners and grow your business with our platform.",
      icon: "🤝",
      link: "/partner"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>
            Unlock your doors to a foreign job
          </h1>
          <p>
            Learn, grow, and succeed with our comprehensive platform for skill development, 
            Get Dream Job, and strategic partnerships.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="hero-button primary">
              Get Skilled
            </Link>
            <Link to="/jobs" className="hero-button secondary">
              Get Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container" style={{ padding: '4rem 0' }}>
        <div className="page-header">
          <h2 className="page-title">
            Our Services
          </h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                {service.icon}
              </div>
              <h3 className="card-title">
                {service.title}
              </h3>
              <p className="card-description">
                {service.description}
              </p>
              <Link to={service.link} className="card-button">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Contact Us Button */}
      <button
        onClick={() => setShowContactPopup(true)}
        style={{
          position: 'fixed',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0 8px 8px 0',
          padding: '25px 12px',
          fontSize: '0.9rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '2px 0 8px rgba(59, 130, 246, 0.3)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#2563eb'
          e.target.style.left = '5px'
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#3b82f6'
          e.target.style.left = '0'
        }}
      >
        Contact Us
      </button>

      {/* Contact Form Popup */}
      {showContactPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowContactPopup(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#6b7280'
              }}
            >
              ✕
            </button>
            <div style={{ marginTop: '1rem' }}>
              <form onSubmit={(e) => {
                e.preventDefault()
                alert('Form submitted successfully!')
                setShowContactPopup(false)
              }}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="phone-input-container">
                    <span>🇮🇳</span>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 89558899XX"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email ID *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="query">Query *</label>
                  <input
                    id="query"
                    type="text"
                    placeholder="What can we help you with?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home 