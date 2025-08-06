import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import jobsData from '../data/jobs.json'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setJobs(jobsData)
  }, [])

  const handleApplyNow = (query) => {
    navigate(`/contact?query=${encodeURIComponent(query)}`)
    // Scroll to top when navigating to contact page
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div className="page-header">
        <h1 className="page-title">
          Get Dream Job
        </h1>
        <p className="page-subtitle">
          Find your dream job with leading companies
        </p>
      </div>
      
      <CardGrid 
        items={jobs} 
        type="jobs" 
        onActionClick={handleApplyNow}
      />
    </div>
  )
}

export default Jobs 