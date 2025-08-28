import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FIXED_COUNTRIES = [
  "Algeria",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Barbados",
  "Belgium",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Cambodia",
  "Canada",
  "Chile",
  "China",
  "Costa Rica",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Egypt",
  "Equatorial Guinea",
  "Estonia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Germany",
  "Greece",
  "Guyana",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Kazakhstan",
  "Kuwait",
  "Latvia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Malaysia",
  "Malta",
  "Maldives",
  "Mauritius",
  "Mexico",
  "Namibia",
  "Nauru",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Oman",
  "Palau",
  "Panama",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Romania",
  "Russia",
  "Saint Lucia",
  "Saudi Arabia",
  "Serbia",
  "Seychelles",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Tuvalu",
  "UAE",
  "UK",
  "Uruguay",
  "USA",
  "Vietnam",
];

const CountrySelect = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const next = searchParams.get("next") || "";
  const country = searchParams.get("country");

  const SORTED_COUNTRIES = useMemo(
    () =>
      [...FIXED_COUNTRIES].sort((a, b) =>
        a.localeCompare(b, "en", { sensitivity: "base" })
      ),
    []
  );
  const [selectedCountry, setSelectedCountry] = useState(
    SORTED_COUNTRIES[0] || ""
  );
  const [listMaxHeight, setListMaxHeight] = useState(360);

  useEffect(() => {
    if (country) {
      //special case when job search is from footer then url will have country
      setSelectedCountry(country);
      handleNext(country);
    }
    const updateHeight = () => {
      // Approximate responsive heights for better UX
      if (window.innerWidth <= 480) setListMaxHeight(260);
      else if (window.innerWidth <= 768) setListMaxHeight(320);
      else setListMaxHeight(360);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [country]);

  const handleNext = (country) => {
    const params = new URLSearchParams();
    if (country) params.set("country", country);
    if (query) params.set("query", query);

    if (next === "jobs") {
      navigate(`/job-categories?${params.toString()}`);
    } else {
      navigate(`/contact?${params.toString()}`);
    }
    setTimeout(() => window.scrollTo(0, 0), 50);
  };

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <div className="page-header">
        <h1 className="page-title">Get Dream Job</h1>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "2rem",
            margin: "2rem auto",
            maxWidth: "900px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
            border: "1px solid #e2e8f0",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "1.5rem",
              textAlign: "center",
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "0.5rem",
            }}
          ></h2>

          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div
              style={{
                background: "#f8fafc",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                1. Bridge to International Opportunities
              </h3>
              <ul className="text-desciption-list">
                <li>
                  <b>SkillEX Abroad acts as a gateway</b> for blue-collar and
                  white-collar, workers and Professional to access high-paying
                  job opportunities abroad.
                </li>
                <li>
                  Through industry-specific certification and training,
                  candidates are prepared to{" "}
                  <b>meet global job market demands</b>.
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                2. Globally Recognised Certification
              </h3>
              <ul className="text-desciption-list">
                <li>
                  Workers and Professional receive{" "}
                  <b>certifications aligned with international standards</b>,
                  making them highly employable in countries such as the USA,
                  UAE, and across the EU.
                </li>
                <li>
                  These certifications validate their skills and compliance with
                  <b>legal, safety, and operational requirements</b>.
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                3. Industry-Ready Training
              </h3>
              <ul className="text-desciption-list">
                <li>
                  Participants are trained to operate according to:
                  <ul
                    style={{
                      paddingLeft: "2rem",
                      color: "#374151",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>
                      <b>USA OSHA and EPA standards.</b>
                    </li>
                    <li>
                      <b>European Commission employment guidelines.</b>
                    </li>
                    <li>
                      <b>UAE MOHRE and Dubai Municipality regulations.</b>
                    </li>
                  </ul>
                </li>
                <li>
                  This ensures they are{" "}
                  <b>
                    fully prepared to work in real-world environments abroad
                  </b>{" "}
                  from day one.
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                4. Higher Earning Potential
              </h3>
              <ul className="text-desciption-list">
                <li>
                  Certified professionals are <b>more competitive</b>, opening
                  doors to
                  <b>
                    jobs with better salaries, benefits, and working conditions
                  </b>
                  than unskilled or uncertified workers and Professional.
                </li>
                <li>
                  Employers abroad{" "}
                  <b>prefer certified workers and Professional</b>, saving time
                  on additional training.
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                5. Safe and Legal Employment Abroad
              </h3>

              <ul className="text-desciption-list">
                <li>
                  SkillEX Abroad ensures all placements follow{" "}
                  <b>legal immigration and labor laws</b>, giving workers and
                  Professional <b>peace of mind</b>
                  and protection from exploitation.
                </li>
                <li>
                  Workers and Professional are educated on their{" "}
                  <b>rights and responsibilities</b> in their destination
                  country.
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                6. Career Growth and Long-Term Benefits
              </h3>
              <ul className="text-desciption-list">
                <li>
                  A SkillEX certification is more than a job ticket—it&#39;s a
                  <b>career-building step.</b>
                </li>
                <li>
                  Certified workers and Professional gain long-term
                  opportunities for <b>career advancement, skill upgrades</b>,
                  and even <b>supervisory roles</b> abroad.
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                7. End-to-End Support
              </h3>
              <ul className="text-desciption-list">
                <li>
                  From skill assessment to certification to job placement,
                  SkillEX Abroad provides <b>complete guidance</b>.
                </li>
                <li>
                  Candidates receive help with{" "}
                  <b>documentation, visa processing</b>, and even{" "}
                  <b>interview preparation</b>.
                </li>
              </ul>
            </div>
            <div
              style={{
                background: "#f8fafc",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                8. Fulfil Personal and Family Dreams
              </h3>
              <ul className="text-desciption-list">
                <li>
                  A better-paying job abroad can transform lives, enabling
                  workers and Professional to:
                  <ul
                    style={{
                      paddingLeft: "2rem",
                      color: "#374151",
                      lineHeight: "1.6",
                    }}
                  >
                    <li>
                      <b>Support families financially.</b>
                    </li>
                    <li>
                      <b>Build homes</b>
                    </li>
                    <li>
                      <b>Fund education for children.</b>
                    </li>
                    <li>
                      <b>Improve overall quality of life.</b>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="page-subtitle" style={{ textAlign: "center" }}>
        Select your preferred country to proceed with the application
      </p>
      <form className="country-options-container">
        <div className="form-group">
          <div
            id="country-list"
            role="listbox"
            aria-label="Country list"
            style={{
              background: "white",
              padding: "12px",
            }}
          >
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "12px",
                }}
              >
                {SORTED_COUNTRIES.map((country) => {
                  const selected = selectedCountry === country;
                  return (
                    <button
                      key={country}
                      type="button"
                      onClick={() => handleNext(country)} // same callback you used with <select>
                      style={{
                        padding: "10px 12px",
                        borderRadius: "10px",
                        border: `2px solid rgb(59, 130, 246)`,
                        background: selected
                          ? "rgb(59, 130, 246)"
                          : "transparent",
                        color: selected ? "#fff" : "rgb(59, 130, 246)",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "background .2s, color .2s",
                      }}
                    >
                      {country}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default CountrySelect;
