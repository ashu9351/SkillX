import { useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || 'Contact Us'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div className="page-header">
        <h1 className="page-title">
          Contact Us
        </h1>
        <p className="page-subtitle">
          Get in touch with us for any questions or inquiries
        </p>
      </div>
      
      {/* Contact form with location fields */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <ContactForm showLocationFields={true} />
      </div>
    </div>
  )
}

export default Contact 