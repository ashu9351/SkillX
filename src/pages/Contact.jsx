import { useEffect } from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <ContactForm />
    </div>
  )
}

export default Contact 