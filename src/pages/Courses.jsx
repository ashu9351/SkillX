import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import coursesData from '../data/courses.json'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setCourses(coursesData)
  }, [])

  const handleBuyNow = (query) => {
    navigate(`/contact?query=${encodeURIComponent(query)}`)
    // Scroll to top when navigating to contact page
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="page-header">
          <h1 className="page-title">
            Get skilled
          </h1>
          <p className="page-subtitle">
            Master in-demand skills with our comprehensive certification programs
          </p>
        </div>
        
        <CardGrid 
          items={courses} 
          type="courses" 
          onActionClick={handleBuyNow}
        />
      </div>
    </div>
  )
}

export default Courses 