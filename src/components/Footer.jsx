const Footer = () => {
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

        <p className="footer-copyright">
          GST No: : 08IEXPK2794J1ZE
          <br />© 2024 SkillEX Abroad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
