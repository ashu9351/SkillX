import { Link } from 'react-router-dom'

const CardGrid = ({ items, type, onActionClick }) => {
  const renderCard = (item) => {
    switch (type) {
      case 'courses':
        return (
          <div key={item.id} className="card">
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1f2937', textAlign: 'left' }}>{item.title}</h3>
              <div style={{ marginBottom: '0.75rem' }}>
                {item.fees && (
                  <span style={{ padding: '4px 8px', backgroundColor: '#fef3c7', color: '#92400e', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>Fees: {item.fees}</span>
                )}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => onActionClick(`Course - ${item.title}`)}
                  style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.875rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease' }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )

      case 'jobs':
        return (
          <div key={item.id} className="card">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: '#1e293b'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  marginBottom: '1rem'
                }}>
                  {item.company}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    padding: '4px 8px',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {item.domain}
                  </span>
                  <span style={{
                    padding: '4px 8px',
                    backgroundColor: '#fef3c7',
                    color: '#92400e',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {item.type}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  marginBottom: '1rem'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    📍 {item.location}
                  </p>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    💼 {item.experience}
                  </p>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    💰 {item.salary}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => onActionClick(`Job - ${item.title}`)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        )

      case 'courseItem':
        return (
          <div key={item.id} className="card">
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1f2937', textAlign: 'left' }}>{item.title}</h3>
              <div style={{ marginBottom: '0.75rem' }}>
                {item.category && (
                  <span style={{ padding: '4px 8px', backgroundColor: '#e0e7ff', color: '#3730a3', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '500' }}>{item.category}</span>
                )}
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                {item.fees && (
                  <span style={{ padding: '4px 8px', backgroundColor: '#fef3c7', color: '#92400e', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>Fees: {item.fees}</span>
                )}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => onActionClick(`Course - ${item.title}`)}
                  style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.875rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease' }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )

      case 'partners':
        return (
          <div key={item.id} className="card">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between'
            }}>
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.domain}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
              )}
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem',
                  color: '#1e293b'
                }}>
                  {item.domain}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {item.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '1rem'
                }}>
                  {item.benefits?.map((benefit, index) => (
                    <span key={index} style={{
                      padding: '4px 8px',
                      backgroundColor: '#f3e8ff',
                      color: '#7c3aed',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => onActionClick(`Partner - ${item.domain}`)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Grow with Us
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className={`services-grid ${type === 'courseItem' || type === 'courses' ? 'course-items' : ''}`}>
      {items.map(renderCard)}
    </div>
  )
}

export default CardGrid 