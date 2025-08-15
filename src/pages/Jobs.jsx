import { useState, useEffect, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import jobsData from '../data/jobs.json'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const country = searchParams.get('country') || ''

  // If no country is chosen, send user to country selection first
  useEffect(() => {
    if (!country) {
      navigate('/select-country?next=jobs', { replace: true })
    }
  }, [country, navigate])

  useEffect(() => {
    setJobs(jobsData)
  }, [])

  const filteredJobs = useMemo(() => {
    if (!country) return []
    return jobs.filter((job) => {
      // Extract country portion from location like "City, Country"
      const parts = (job.location || '').split(',')
      const jobCountry = parts[parts.length - 1]?.trim()
      return jobCountry?.toLowerCase() === country.toLowerCase()
    })
  }, [jobs, country])

  const handleApplyNow = (query) => {
    const params = new URLSearchParams()
    params.set('query', query)
    if (country) params.set('country', country)
    navigate(`/contact?${params.toString()}`)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  if (!country) {
    // brief empty state during redirect
    return null
  }

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div className="page-header">
        <h1 className="page-title">
          Jobs in {country}
        </h1>
        <p className="page-subtitle">
          Browse opportunities available in your selected country
        </p>
      </div>
      
      <CardGrid 
        items={filteredJobs} 
        type="jobs" 
        onActionClick={handleApplyNow}
      />
    </div>
  )
}

export default Jobs 