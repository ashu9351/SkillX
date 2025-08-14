import { useMemo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import coursesData from '../data/courses.json'

const Courses = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setCategories(coursesData)
  }, [])

  const handleBuyNow = (query) => {
    navigate(`/contact?query=${encodeURIComponent(query)}`)
    // Scroll to top when navigating to contact page
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  const flatCourses = useMemo(() => {
    const items = []
    categories.forEach((cat) => {
      (cat.courses || []).forEach((title, idx) => {
        items.push({
          id: `${cat.id}-${idx}`,
          title,
          category: cat.title,
          fees: cat.fees,
          image: cat.image
        })
      })
    })
    return items
  }, [categories])

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div className="page-header">
        <h1 className="page-title">
          Get skilled
        </h1>
        <p className="page-subtitle">
          Master in-demand skills with our comprehensive certification programs
        </p>
      </div>
      {categories.map((cat) => (
        <section key={cat.id} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 18px',
                borderRadius: 9999,
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                border: '1px solid #bfdbfe',
                color: '#1e3a8a',
                boxShadow: '0 6px 14px rgba(59, 130, 246, 0.15)'
              }}
            >
              <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, letterSpacing: 0.2 }}>{cat.title}</h2>
            </div>
          </div>
          <CardGrid
            items={(cat.courses || []).map((title, idx) => ({
              id: `${cat.id}-${idx}`,
              title,
              category: cat.title,
              fees: cat.fees
            }))}
            type="courseItem"
            onActionClick={handleBuyNow}
          />
        </section>
      ))}
    </div>
  )
}

export default Courses 