import { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import CountrySlider from "../components/CountrySlider";

const Home = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const services = [
    {
      title: "Acquire Skills",
      description:
        "SkillEX Abroad helps blue-collar and white-collar, Professional, especially janitorial and domestic workers, obtain globally recognised certifications. These certifications are specifically tailored to meet international job market standards, increasing chances of employment abroad.",
      icon: "🎓",
      link: "/courses",
    },
    {
      title: "Get Dream Job",
      description:
        "SkillEX Abroad acts as a gateway for blue-collar and white-collar, workers and Professional to access high-paying job opportunities abroad through industry-specific certification and training, candidates are prepared to meet global job market demands.",
      icon: "💼",
      link: "/jobs",
    },
    {
      title: "Grow with Us",
      description:
        'SkillEX Abroad is launching an empowering new policy called "Grow with Us", designed to build a nationwide partner network. This initiative opens doors for motivated individuals from any city in the country to collaborate with us and become official partners in our mission to transform the lives of blue-collar and white-collar job seekers.',
      icon: "🤝",
      link: "/partner?isPartner=true",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1>
            <span>Unlock your doors to a </span>
            <span style={{ color: "#3b82f6" }}>Foreign Job</span>
          </h1>
          <p>
            Learn, grow, and succeed with our comprehensive platform for skill
            development, Get Dream Job, and strategic partnerships.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="hero-button primary">
              Get Skilled
            </Link>
            <Link to="/jobs" className="hero-button secondary">
              Get Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Country Slider Section */}
      <CountrySlider />

      {/* Industry-Relevant Training & Certification Section */}
      <section
        style={{
          background: "white",
          padding: "4rem 0",
          margin: "2rem 0",
        }}
      >
        <div className="container" style={{ padding: "0 20px" }}>
          <div className="illustration-container">
            <div className="illustration-text">
              <div className="illustration-text-head-pill">
                Training & Certification Programme
                <span style={{ fontSize: "1rem" }}>→</span>
              </div>
              <h2>Optimized Training & Certification</h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#6b7280",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                }}
              >
                The SkillEX Abroad Training & Certification Programme is built
                on extensive, industry-focused curriculum and delivered by a
                dedicated team of highly qualified trainers. It equips aspiring
                professionals with a balanced mix of practical skills and
                theoretical knowledge, covering critical areas such as workplace
                safety, global operational practices, and essential technical
                protocols. The programme is designed to prepare candidates for
                international opportunities with confidence and competence.
              </p>
              <div className="illustration-text-bullets">
                <div className="illustration-text-bullet">
                  <div className="illustration-text-bullet-icon">
                    <div className="illustration-text-bullet-icon-check">
                      {" "}
                      ✓
                    </div>
                  </div>
                  <div className="illustration-text-bullet-text">
                    Training aligned with globally recognised industry standards
                    and employer needs
                  </div>
                </div>

                <div className="illustration-text-bullet">
                  <div className="illustration-text-bullet-icon">
                    <div className="illustration-text-bullet-icon-check">
                      {" "}
                      ✓
                    </div>
                  </div>
                  <div className="illustration-text-bullet-text">
                    Comprehensive role-based modules, assessments, and
                    verifiable certifications
                  </div>
                </div>
                <div className="illustration-text-bullet">
                  <div className="illustration-text-bullet-icon">
                    <div className="illustration-text-bullet-icon-check">
                      {" "}
                      ✓
                    </div>
                  </div>
                  <div className="illustration-text-bullet-text">
                    Accelerated pathways to job readiness for overseas
                    placements
                  </div>
                </div>
                <div className="illustration-text-bullet">
                  <div className="illustration-text-bullet-icon">
                    <div className="illustration-text-bullet-icon-check">
                      {" "}
                      ✓
                    </div>
                  </div>
                  <div className="illustration-text-bullet-text">
                    End-to-end support with documentation and interview
                    preparation
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Link to="/courses" className="illustration-text-button">
                  START LEARNING
                  <span style={{ fontSize: "1rem" }}>→</span>
                </Link>
              </div>
            </div>
            <div className="illustration-image">
              <div
                style={{
                  fontSize: "8rem",
                  color: "#3b82f6",
                }}
              >
                🎓
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#dbeafe",
                  borderRadius: "50%",
                  opacity: "0.3",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Job Matching & Hiring Section */}
      <section
        style={{
          background: "#f8fafc",
          padding: "4rem 0",
          margin: "2rem 0",
        }}
      >
        <div className="container" style={{ padding: "0 20px" }}>
          <div className="illustration-container">
            <div className="illustration-image">
              <div
                style={{
                  fontSize: "8rem",
                  color: "#3b82f6",
                }}
              >
                💼
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#dbeafe",
                  borderRadius: "50%",
                  opacity: "0.3",
                }}
              ></div>
            </div>
            <div className="illustration-text">
              <div className="illustration-text-head-pill">
                Hiring
                <span style={{ fontSize: "1rem" }}>→</span>
              </div>
              <h2>Globe wide job matching and placements</h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#6b7280",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                }}
              >
                SkillEX Abroad is a next-generation employment platform that
                connects global employers, recruiters, and manpower partners
                with qualified talent. It enables organizations to post
                opportunities while helping job seekers discover roles that
                align with their skills, experience, and certifications.
              </p>

              <hr />

              <div className="illustration-text-cards">
                <div className="illustration-text-card">
                  <div className="illustration-text-card-icon">👥</div>
                  <div className="illustration-text-card-text">
                    Great Recruitment Partners And Trusted Direct Employers
                  </div>
                </div>
                <div className="illustration-text-card">
                  <div className="illustration-text-card-icon">🌍</div>
                  <div className="illustration-text-card-text">
                    Access To 70,000+ Verified Jobs Across 28+ Countries
                  </div>
                </div>
              </div>
              <div className="illustration-text-description">
                <p>
                  Covering opportunities in major fileds like Agriculture ,
                  BioTech,Finance, Banking, Insurance, Consulting,
                  Constructions,IT, Telecom, Design, Engineering, Manufacturing,
                  Healthcare, Logistics, Construction, Agriculture, Hospitality,
                  Power, Retail and more.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Link to="/jobs" className="illustration-text-button">
                  GET A JOB
                  <span style={{ fontSize: "1rem" }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHy skillex */}
      <section
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          padding: "4rem 0",
          margin: "2rem 0",
        }}
      >
        <div className="container" style={{ padding: "0 20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="illustration-text-head-pill"
              style={{ margin: "auto", marginBottom: "2rem" }}
            >
              Why SkillEx?
              <span style={{ fontSize: "1rem" }}>→</span>
            </div>

            {/* Main Heading */}
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "3rem",
                lineHeight: "1.2",
              }}
            >
              Why SkillEx?
            </h2>
            <div className="icon-card-container">
              <div className="icon-card">
                <div className="icon-card-icon fa-solid fa-user-tie"></div>
                <div className="icon-card-text">
                  Courses designed by experts
                </div>
              </div>
              <div className="icon-card">
                <div className="icon-card-icon fa-solid fa-certificate"></div>
                <div className="icon-card-text">
                  Industry relevant certifications
                </div>
              </div>
              <div className="icon-card">
                <div className="icon-card-icon fa-solid fa-handshake"></div>
                <div className="icon-card-text">Personal mentorship</div>
              </div>
              <div className="icon-card">
                <div className="icon-card-icon fa-solid fa-book"></div>
                <div className="icon-card-text">
                  Carefully curated course materials
                </div>
              </div>
              <div className="icon-card">
                <div className="icon-card-icon fa-solid fa-hand-holding-hand"></div>
                <div className="icon-card-text">Job placement support</div>
              </div>
              <div className="icon-card">
                <div className="icon-card-icon fa-solid fa-globe"></div>
                <div className="icon-card-text">Globe wide job search</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          padding: "4rem 0",
          margin: "2rem 0",
        }}
      >
        <div className="container" style={{ padding: "0 20px" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {/* Call to Action Button */}
            <div style={{ marginBottom: "2rem" }}>
              <Link
                to="/courses"
                style={{
                  backgroundColor: "#1e40af",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  transition: "all 0.2s ease",
                  fontSize: "1rem",
                }}
              >
                Build a Compliance-Ready Profile for International Jobs
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </Link>
            </div>

            {/* Main Heading */}
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "3rem",
                lineHeight: "1.2",
              }}
            >
              Get Ready for Global Opportunities
            </h2>

            {/* Two Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
              className="confidence-cards-grid"
            >
              {/* Blue-Collar Card */}
              <div
                style={{
                  backgroundColor: "#eff6ff",
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid #dbeafe",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "0.5rem",
                  }}
                >
                  For Blue-Collar Job Seekers
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#3b82f6",
                    fontWeight: "600",
                    marginBottom: "1.5rem",
                  }}
                >
                  Skilled. Secure. Ready.
                </p>
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div className="circle-icons">✓</div>
                    <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                      Workplace safety majors & protocols
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div className="circle-icons">✓</div>
                    <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                      Equipment Handling Standards
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div className="circle-icons"> ✓</div>
                    <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                      Regulatory rules & Legalities
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div className="circle-icons"> ✓</div>
                    <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                      Industry-centric technical & Operating Standards
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    fontStyle: "italic",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  "Safety and certification are your only way to secure global
                  job opportunities."
                </p>
              </div>

              {/* White-Collar Card */}
              <div
                style={{
                  backgroundColor: "#eff6ff",
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid #dbeafe",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "0.5rem",
                  }}
                >
                  For White-Collar Job Seekers
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#3b82f6",
                    fontWeight: "600",
                    marginBottom: "1.5rem",
                  }}
                >
                  Skills + Compliance = Success
                </p>
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div className="circle-icons">✓</div>

                    <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                      Data Compliances
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div className="circle-icons">✓</div>
                    <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                      Whistleblower Protection
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div className="circle-icons">✓</div>
                    <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                      Ethical & legal compliance
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div className="circle-icons">✓</div>
                    <span style={{ color: "#374151", fontSize: "0.9rem" }}>
                      Abroad workplace standards
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    fontStyle: "italic",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  "Get prepared technically and legally for global
                  opportunities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section
        style={{
          background: "white",
          padding: "4rem 0",
          margin: "2rem 0",
        }}
      >
        <div className="container" style={{ padding: "0 20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
            className="how-it-works-grid"
          >
            <div className="illustration-image">
              <div
                style={{
                  fontSize: "8rem",
                  color: "#3b82f6",
                }}
              >
                👥
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#dbeafe",
                  borderRadius: "50%",
                  opacity: "0.3",
                }}
              ></div>
            </div>
            {/* Left Image */}

            {/* Right Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#dbeafe",
                  color: "#1e40af",
                  padding: "0.5rem 1rem",
                  borderRadius: "50px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem",
                }}
              >
                process →
              </div>

              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "2rem",
                  lineHeight: "1.2",
                }}
              >
                Steps to Success
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    01
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Assessment
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      Select your job category and Define target job roles,
                      region, markets, and career goals.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    02
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Prepare
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      Leverage expert advice to create and refine documents.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    03
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Apply
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      Shortlist jobs, customize applications, and submit
                      conveniently.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    04
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Polish your candidature
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      Leverage structured guidance to refine your candidature .
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    05
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Optimise
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      Strengthen online profiles and recruiter visibility.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    06
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Connect
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      Leverage verified recruiters and professional networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes you can expect Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",
          padding: "4rem 0",
          margin: "2rem 0",
        }}
      >
        <div className="container" style={{ padding: "0 20px" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {/* Header Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#1e40af",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
              }}
            >
              process
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  marginLeft: "0.5rem",
                }}
              ></div>
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                }}
              ></div>
            </div>

            {/* Main Heading */}
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "3rem",
                lineHeight: "1.2",
              }}
            >
              Key Benefits
            </h2>

            {/* Three Outcome Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
              className="outcomes-grid"
            >
              {/* Outcome 01 */}
              <div
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    color: "#1e40af",
                    width: "48px",
                    height: "32px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  01
                </div>
                <div
                  style={{
                    fontSize: "4rem",
                    marginBottom: "1rem",
                  }}
                >
                  📄
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "0.75rem",
                  }}
                >
                  Optimised Applications
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    lineHeight: "1.5",
                  }}
                >
                  Documents aligned to global hiring standards.
                </p>
              </div>

              {/* Outcome 02 */}
              <div
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    color: "#1e40af",
                    width: "48px",
                    height: "32px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  02
                </div>
                <div
                  style={{
                    fontSize: "4rem",
                    marginBottom: "1rem",
                  }}
                >
                  🆔
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "0.75rem",
                  }}
                >
                  More Interview Opportunities
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    lineHeight: "1.5",
                  }}
                >
                  Improve your conversions through targeted preparation.
                </p>
              </div>

              {/* Outcome 03 */}
              <div
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#eff6ff",
                    color: "#1e40af",
                    width: "48px",
                    height: "32px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  03
                </div>
                <div
                  style={{
                    fontSize: "4rem",
                    marginBottom: "1rem",
                  }}
                >
                  🌍
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "0.75rem",
                  }}
                >
                  Global Readiness
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    lineHeight: "1.5",
                  }}
                >
                  Clear steps for work permits and overseas roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container" style={{ padding: "0" }}>
        <div className="page-header">
          <h2 className="page-title">Our Services</h2>
        </div>
        <div className="services-grid services-grid-home">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="card-icon">{service.icon}</div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <Link to={service.link} className="card-button">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Important Disclaimer Notice */}
      <section
        style={{
          background: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
          padding: "3rem 0",
          margin: "2rem 0",
          borderTop: "3px solid #dc2626",
          borderBottom: "3px solid #dc2626",
        }}
      >
        <div className="container" style={{ padding: "0 20px" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {/* Warning Icon and Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#dc2626",
                }}
              >
                ⚠️
              </div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#991b1b",
                  margin: 0,
                }}
              >
                Important Notice: No Job Guarantee — Only Job Assistance
              </h2>
            </div>

            {/* Main Disclaimer Text */}
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #fecaca",
                boxShadow: "0 4px 6px rgba(220, 38, 38, 0.1)",
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#374151",
                  lineHeight: "1.7",
                  marginBottom: "1.5rem",
                  fontWeight: "600",
                }}
              >
                <strong>
                  SkillEX Abroad does not offer or claim any guaranteed job
                  placements.
                </strong>{" "}
                Any claim of a "job guarantee" is misleading and should be
                considered a scam.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                Instead, we provide structured{" "}
                <strong>Job Assistance Training Modules</strong> that are
                carefully designed to equip job seekers with the skills,
                certifications, and support needed to succeed in the
                international job market.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                Our team will guide you through every stage of your employment
                journey, including:
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem 0",
                }}
              >
                {[
                  "Career counseling and resume building",
                  "Interview preparation",
                  "Understanding international job markets",
                  "Connecting with recruitment partners where available",
                  "Compliance with legal and safety standards",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                      fontSize: "1rem",
                      color: "#374151",
                    }}
                  >
                    <span
                      style={{
                        color: "#059669",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                While we assist and empower you to secure a job abroad, actual
                hiring decisions are made by foreign employers, and we cannot
                influence or guarantee those outcomes.
              </p>
            </div>

            {/* Website Disclaimer Section */}
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "12px",
                border: "2px solid #fecaca",
                boxShadow: "0 4px 6px rgba(220, 38, 38, 0.1)",
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#991b1b",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                ⚠️ Website Disclaimer – No Job Guarantee
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                At SkillEX Abroad, transparency and integrity are core to
                everything we do. Please read the following important
                disclaimer:
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#dc2626",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                  fontWeight: "600",
                }}
              >
                <strong>
                  SkillEX Abroad does NOT provide or guarantee job placements.
                </strong>{" "}
                Any claim of a "job guarantee" is misleading and should be
                considered a scam.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                We strongly advise all users and applicants to be cautious of
                unauthorised agents or individuals who promise guaranteed jobs
                in exchange for money.
              </p>

              <div
                style={{
                  backgroundColor: "#f0fdf4",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  border: "1px solid #bbf7d0",
                  marginBottom: "1.5rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#059669",
                    marginBottom: "1rem",
                  }}
                >
                  ✔️ What We DO Offer:
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#374151",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}
                >
                  SkillEX Abroad provides Job Assistance Training Modules
                  designed to prepare candidates for international employment
                  opportunities. Our support includes:
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {[
                    "Industry-recognised skill certification",
                    "Career counselling and resume support",
                    "Interview preparation",
                    "Exposure to international job market standards",
                    "Guidance on legal and compliance requirements (OSHA, MOHRE, EU-OSHA, etc.)",
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                        fontSize: "1rem",
                        color: "#374151",
                      }}
                    >
                      <span
                        style={{
                          color: "#059669",
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#374151",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  These services are aimed at enhancing your employability and
                  increasing your chances of securing jobs abroad. However, we
                  do not control the hiring decisions of foreign employers.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#fef3c7",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  border: "1px solid #fde68a",
                  marginBottom: "1.5rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#92400e",
                    marginBottom: "1rem",
                  }}
                >
                  🛡️ Stay Safe:
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {[
                    "Do not share personal or financial details with anyone claiming to offer guaranteed jobs",
                    "Contact us directly through our official channels for any clarification or verification",
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.75rem",
                        fontSize: "1rem",
                        color: "#92400e",
                      }}
                    >
                      <span
                        style={{
                          color: "#dc2626",
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                        }}
                      >
                        ⚠️
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                By using our website or enrolling in any of our programs, you
                acknowledge and accept that SkillEX Abroad only provides skill
                development and job assistance—not employment guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Us Button */}
      <button
        onClick={() => setShowContactPopup(true)}
        style={{
          position: "fixed",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "0 8px 8px 0",
          padding: "25px 12px",
          fontSize: "0.9rem",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "2px 0 8px rgba(59, 130, 246, 0.3)",
          zIndex: 1000,
          transition: "all 0.3s ease",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#2563eb";
          e.target.style.left = "5px";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#3b82f6";
          e.target.style.left = "0";
        }}
      >
        Contact Us
      </button>

      {/* Contact Form Popup */}
      {showContactPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              maxWidth: "600px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowContactPopup(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#6b7280",
              }}
            >
              ✕
            </button>
            <div style={{ marginTop: "1rem" }}>
              <ContactForm
                showLocationFields={true}
                onClose={() => setShowContactPopup(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
