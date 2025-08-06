import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const Partner = () => {
  const navigate = useNavigate()

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div className="page-header">
        <h1 className="page-title">
          Become Our Partner
        </h1>
        <p className="page-subtitle">
          Empower Lives. Build the Future. Partner With Us.
        </p>
      </div>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        lineHeight: '1.8',
        fontSize: '1.1rem',
        color: '#374151',
        marginBottom: '3rem'
      }}>
        <p style={{ marginBottom: '2rem' }}>
          Are you passionate about making a difference in the lives of skilled workers? Join hands with us as a partner and become a part of a growing ecosystem dedicated to uplifting blue-collar talent across the nation.
        </p>
        
        <p>
          We're looking for individuals, organizations, NGOs, training centers, and community leaders who can help us identify, train, and place blue-collar workers in meaningful jobs. Whether you're a recruiter, training provider, placement agency, or someone who believes in empowering the workforce, this is your opportunity to contribute to a social cause while building a sustainable business.
        </p>
      </div>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <ContactForm />
      </div>
    </div>
  )
}

export default Partner 