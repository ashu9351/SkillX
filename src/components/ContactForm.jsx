import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ContactForm = () => {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    query: searchParams.get('query') || 'Become Our Partner',
    description: ''
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted successfully!')
    console.log('Form data:', formData)
  }

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
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
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
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
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="query">Query *</label>
          <input
            id="query"
            type="text"
            placeholder="What can we help you with?"
            value={formData.query}
            onChange={(e) => handleChange('query', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Tell us more about your requirements..."
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={4}
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm 