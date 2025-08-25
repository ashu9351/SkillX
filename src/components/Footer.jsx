import { Link } from 'react-router-dom'

const Footer = () => {
  const countries = [
    'Algeria', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Barbados',
    'Belgium', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Cambodia', 'Canada', 'Chile', 'China', 'Costa Rica',
    'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Dominican Republic', 'Egypt', 'Equatorial Guinea', 'Estonia', 'Fiji', 'Finland',
    'France', 'Gabon', 'Germany', 'Greece', 'Guyana', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia',
    'Iran', 'Ireland', 'Israel', 'Italy', 'Japan', 'Kazakhstan', 'Kuwait', 'Latvia', 'Libya', 'Lithuania',
    'Luxembourg', 'Macau', 'Malaysia', 'Malta', 'Maldives', 'Mauritius', 'Mexico', 'Namibia', 'Nauru', 'Netherlands',
    'New Zealand', 'Norway', 'Oman', 'Palau', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico',
    'Qatar', 'Romania', 'Russia', 'Saint Lucia', 'Saudi Arabia', 'Serbia', 'Seychelles', 'Singapore', 'Slovakia', 'Slovenia',
    'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'Tuvalu', 'UAE',
    'UK', 'Uruguay', 'USA', 'Vietnam'
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Phone</h3>
            <p>+91-9636333519</p>
          </div>

          <div className="footer-section">
            <h3>Email</h3>
            <p>skillexabroad@gmail.com</p>
          </div>

          <div className="footer-section">
            <h3>Social Sites</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/skillexabroad?igsh=a2NlemtveGNraDJj&utm_source=qr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener"
                data-network="instagram"
                style={{ color: "white" }}
              >
                <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                <span class="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/1BRSMNWDav/?mibextid=wwXIfr"
                aria-label="Facebook"
                target="_blank"
                rel="noopener"
                data-network="facebook"
                style={{ color: "white" }}
              >
                <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
                <span class="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/skillex-abroad-33678137b"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener"
                data-network="linkedin"
                style={{ color: "white" }}
              >
                <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                <span class="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Location</h3>
            <p>13B, Behind Nagar Palika New Colony, Phulera-303338</p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section jobs-by-country">
          <h3>Jobs by Country</h3>
          <div className="countries-grid">
            {countries.map((country) => (
              <Link
                key={country}
                to={`/jobs?country=${encodeURIComponent(country)}`}
                className="country-link"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {country}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          GST No: : 08IEXPK2794J1ZE
          <br />© 2024 SkillEX Abroad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
