import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { State, City } from 'country-state-city'

const ContactForm = ({ country = '', showLocationFields = false }) => {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    query: searchParams.get('query') || 'Become Our Partner',
    description: ''
  })

  const states = useMemo(() => {
    const list = State.getStatesOfCountry('IN') || []
    return [...list].sort((a, b) => a.name.localeCompare(b.name))
  }, [])
  const [selectedState, setSelectedState] = useState('') // isoCode
  const selectedStateObj = useMemo(() => states.find(s => s.isoCode === selectedState) || null, [states, selectedState])
  const sortedCities = useMemo(() => {
    if (!selectedState) return []
    const list = City.getCitiesOfState('IN', selectedState) || []
    return [...list].sort((a, b) => a.name.localeCompare(b.name))
  }, [selectedState])
  const [selectedCity, setSelectedCity] = useState('')

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      ...formData,
      country: showLocationFields ? 'India' : country,
      state: showLocationFields ? (selectedStateObj?.name || '') : undefined,
      city: showLocationFields ? selectedCity : undefined
    }
    alert('Form submitted successfully!')
    console.log('Form data:', payload)
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
            <span className="phone-prefix">IN</span>
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

        {showLocationFields ? (
          <>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input id="country" type="text" value="India" readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                id="state"
                value={selectedState}
                onChange={(e) => { setSelectedState(e.target.value); setSelectedCity('') }}
                required
              >
                <option value="" disabled>Select State</option>
                {states.map((st) => (
                  <option key={st.isoCode} value={st.isoCode}>{st.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                required
                disabled={!selectedState}
              >
                <option value="" disabled>{selectedState ? 'Select City' : 'Select State first'}</option>
                {sortedCities.map((ct) => (
                  <option key={ct.name} value={ct.name}>{ct.name}</option>
                ))}
              </select>
            </div>
          </>
        ) : (
          country && (
            <div className="form-group">
              <label htmlFor="countryReadOnly">Country</label>
              <input id="countryReadOnly" type="text" value={country} readOnly />
            </div>
          )
        )}

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