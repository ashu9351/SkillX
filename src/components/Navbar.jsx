import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Website_Logo
        </Link>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/courses" 
            className={`navbar-link ${isActive('/courses') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Get skilled
          </Link>
          
          <Link 
            to="/jobs" 
            className={`navbar-link ${isActive('/jobs') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Jobs
          </Link>
          
          <Link 
            to="/partner" 
            className={`navbar-link ${isActive('/partner') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Grow with Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 