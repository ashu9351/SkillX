import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const Partner = () => {
  const navigate = useNavigate()

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div className="page-header">
        <h1 className="page-title">
          Become Our Partner
        </h1>
        <p className="page-subtitle">
          Empower Lives. Build the Future. Partner With Us.
        </p>
      </div>
      
      {/* Enhanced info panel */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto 2rem',
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '14px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}
      >
        <div style={{
          padding: '1rem',
          background: '#eff6ff',
          borderBottom: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <strong style={{ color: '#1e40af', letterSpacing: 0.3 }}>Grow with a Purpose</strong>
        </div>

        <div style={{ padding: '1.5rem 1.25rem' }}>
          <p style={{
            color: '#374151',
            lineHeight: 1.8,
            fontSize: '1.05rem',
            margin: 0,
            marginBottom: '1rem',
            textAlign: 'left'
          }}>
            Are you passionate about <strong style={{ color: '#1e40af' }}>making a real difference</strong> in the lives of skilled workers? Join hands with us as a partner and become a part of a growing ecosystem dedicated to <strong style={{ color: '#1e40af' }}>uplifting blue‑collar talent</strong> across the nation.
          </p>

          <p style={{
            color: '#4b5563',
            lineHeight: 1.8,
            fontSize: '1.02rem',
            margin: 0,
            marginBottom: '1.25rem',
            textAlign: 'left'
          }}>
            We're looking for <strong>individuals</strong>, <strong>organizations</strong>, <strong>NGOs</strong>, <strong>training centers</strong>, and <strong>community leaders</strong> who can help identify, train, and place workers in meaningful jobs. Whether you're a <em>recruiter</em>, <em>training provider</em>, or <em>placement agency</em>, this is your opportunity to contribute to a social cause while <strong style={{ color: '#059669' }}>building a sustainable business</strong>.
          </p>

          {/* Key points */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0.75rem',
            marginTop: '0.5rem'
          }}>
            {[{
              title: 'Impact at Scale',
              desc: 'Connect workers with global opportunities'
            }, {
              title: 'Training Support',
              desc: 'Access structured skilling programs'
            }, {
              title: 'Growth Network',
              desc: 'Partner with employers across regions'
            }, {
              title: 'Sustainable Returns',
              desc: 'Create value while doing good'
            }].map((item, idx) => (
              <div key={idx} style={{
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                padding: '0.9rem',
                background: '#f9fafb'
              }}>
                <div style={{ fontWeight: 700, color: '#111827', marginBottom: 4 }}>{item.title}</div>
                <div style={{ color: '#6b7280', fontSize: '0.95rem' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact form with location fields */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <ContactForm showLocationFields={true} />
      </div>
    </div>
  )
}

export default Partner 