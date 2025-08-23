import { useState, useEffect, useRef } from 'react'

const CountrySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const countries = [
    { name: 'United States', flag: '/images/flags/usa.png' },
    { name: 'United Kingdom', flag: '/images/flags/uk.png' },
    { name: 'Canada', flag: '/images/flags/canada.png' },
    { name: 'Australia', flag: '/images/flags/australia.png' },
    { name: 'Germany', flag: '/images/flags/germany.png' },
    { name: 'France', flag: '/images/flags/france.png' },
    { name: 'Netherlands', flag: '/images/flags/netherlands.png' },
    { name: 'Switzerland', flag: '/images/flags/switzerland.png' },
    { name: 'Singapore', flag: '/images/flags/singapore.png' },
    { name: 'New Zealand', flag: '/images/flags/newzealand.png' }
  ]

  // Responsive circle dimensions for mobile (3 circles visible)
  const getCircleDimensions = () => {
    if (window.innerWidth <= 480) {
      return { width: (window.innerWidth - 20) / 3, margin: 0 }
    } else if (window.innerWidth <= 768) {
      return { width: (window.innerWidth - 40) / 3, margin: 0 }
    } else {
      return { width: 200, margin: 40 }
    }
  }

  const [circleDimensions, setCircleDimensions] = useState(getCircleDimensions())
  const { width: circleWidth, margin: circleMargin } = circleDimensions
  const totalCircleWidth = circleWidth + circleMargin
  const transformValue = currentSlide * totalCircleWidth

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setCircleDimensions(getCircleDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Duplicate array for infinite scrolling
  const duplicatedCountries = [...countries, ...countries, ...countries]

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= countries.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [countries.length])

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => 
          prev >= countries.length - 1 ? 0 : prev + 1
        )
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => 
          prev <= 0 ? countries.length - 1 : prev - 1
        )
      }
    }
  }

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  // Pause auto-scroll on hover/touch
  const handleSliderInteraction = () => {
    // This can be extended to pause auto-scroll if needed
  }

  return (
    <section className="country-section">
      <div className="country-slider-header">
        <h2 className="country-slider-title">
          Jobs are available in the below countries
        </h2>
      </div>

      <div className="country-circles-container">
        <div 
          className="country-circles-slider"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleSliderInteraction}
          onMouseLeave={handleSliderInteraction}
        >
          <div className="circles-stage-outer">
            <div
              className="circles-stage"
              style={{
                transform: `translate3d(-${transformValue}px, 0px, 0px)`,
                transition: 'transform 0.5s ease',
                width: `${duplicatedCountries.length * totalCircleWidth}px`
              }}
            >
              {duplicatedCountries.map((country, index) => (
                <div
                  key={index}
                  className="country-circle-item"
                  style={{
                    width: `${circleWidth}px`,
                    marginRight: `${circleMargin}px`
                  }}
                >
                  <div className="country-circle">
                    <div className="flag-circle">
                      <img 
                        src={country.flag} 
                        alt={`${country.name} flag`} 
                        className="flag-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="country-name">
                      <h3>{country.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="country-slider-dots-bottom">
          {countries.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountrySlider
