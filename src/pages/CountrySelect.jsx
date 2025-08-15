import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FIXED_COUNTRIES = [
  'Saudi Arabia',
  'United Arab Emirates',
  'Kuwait',
  'Qatar',
  'Oman',
  'Bahrain',
  'Israel',
  'Germany',
  'Denmark',
  'United Kingdom',
  'Hungary',
  'Latvia',
  'Luxembourg',
  'Finland',
  'Sweden',
  'Lithuania',
  'Austria',
  'Bulgaria',
  'Czech Republic',
  'Croatia',
  'Romania',
  'Japan'
]

const CountrySelect = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  const next = searchParams.get('next') || ''

  const SORTED_COUNTRIES = useMemo(() => [...FIXED_COUNTRIES].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })), [])
  const [selectedCountry, setSelectedCountry] = useState(SORTED_COUNTRIES[0] || '')
  const [listMaxHeight, setListMaxHeight] = useState(360)

  useEffect(() => {
    const updateHeight = () => {
      // Approximate responsive heights for better UX
      if (window.innerWidth <= 480) setListMaxHeight(260)
      else if (window.innerWidth <= 768) setListMaxHeight(320)
      else setListMaxHeight(360)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const handleNext = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (selectedCountry) params.set('country', selectedCountry)
    if (query) params.set('query', query)

    if (next === 'jobs') {
      navigate(`/jobs?${params.toString()}`)
    } else {
      navigate(`/contact?${params.toString()}`)
    }
    setTimeout(() => window.scrollTo(0, 0), 50)
  }

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div className="page-header">
        <h1 className="page-title">Choose Country</h1>
        <p className="page-subtitle">Select your preferred country to proceed with the application</p>
      </div>

      <form onSubmit={handleNext} className="contact-form-container" style={{ maxWidth: 520 }}>
        <div className="form-group">
          <label htmlFor="country-list">Country *</label>
          <div
            id="country-list"
            role="listbox"
            aria-label="Country list"
            style={{
              border: '2px solid #e5e7eb',
              borderRadius: 12,
              overflow: 'hidden',
              background: 'white'
            }}
          >
            <div
              style={{
                maxHeight: listMaxHeight,
                overflowY: 'auto'
              }}
            >
              {SORTED_COUNTRIES.map((c) => {
                const isSelected = selectedCountry === c
                return (
                  <button
                    key={c}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCountry(c)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 16px',
                      border: 'none',
                      borderBottom: '1px solid #f1f5f9',
                      background: isSelected ? '#eff6ff' : 'white',
                      color: '#1f2937',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ pointerEvents: 'none' }}>{c}</span>
                    {isSelected && (
                      <span style={{
                        color: '#3b82f6',
                        fontWeight: 700
                      }}>
                        ✓
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
          <small style={{ color: '#6b7280' }}>Scroll to see more countries</small>
        </div>

        <button type="submit" className="submit-button">Next</button>
      </form>
    </div>
  )
}

export default CountrySelect
