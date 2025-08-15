import { useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
  const [searchParams] = useSearchParams()
  const country = searchParams.get('country') || ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <ContactForm country={country} />
    </div>
  )
}

export default Contact 