import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardGrid from "../components/CardGrid";
import coursesData from "../data/courses.json";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCategories(coursesData);
  }, []);

  const handleBuyNow = (query) => {
    navigate(`/contact?query=${encodeURIComponent(query)}`);
    // Scroll to top when navigating to contact page
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const flatCourses = useMemo(() => {
    const items = [];
    categories.forEach((cat) => {
      (cat.courses || []).forEach((title, idx) => {
        items.push({
          id: `${cat.id}-${idx}`,
          title,
          category: cat.title,
          fees: cat.fees,
          image: cat.image,
        });
      });
    });
    return items;
  }, [categories]);

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <div className="page-header">
        <h1 className="page-title">Get skilled</h1>
        <p className="page-subtitle"></p>
      </div>

      {/* Acquire Skills: Key Points Section */}
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
              1. Certification for International Employment
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              <li>
                SkillEX Abroad helps blue-collar and white-collar, Professional,
                especially janitorial and domestic workers, obtain globally
                recognised certifications.
              </li>
              <li>
                These certifications are specifically tailored to meet
                international job market standards, increasing chances of
                employment abroad.
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
              2. Training Based on International Best Practices
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              <li>
                Participants are trained to apply internationally recognized
                best practices in the janitorial and facility management
                industry.
              </li>
              <li>
                This includes training in cleaning protocols, hygiene standards,
                and safe waste management.
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
              3. Legal and Environmental Compliance
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              <li>
                The training ensures compliance with region-specific laws and
                environmental regulations, vital for working legally and safely
                in foreign countries.
              </li>
              <li>
                Workers and Professional learn to navigate legal expectations in
                the USA, UAE, and European countries.
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
              4. Safety and Machinery Operation
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              <li>
                SkillEX Abroad trains candidates in the safe and efficient use
                of industrial cleaning machines and tools.
              </li>
              <li>
                Safety standards include Hazard Communication (USA), EPA
                regulations, OSHA compliance, and more.
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
              5. Multi-Regional Standard Certification
            </h3>
            <p
              style={{
                margin: "0 0 0.75rem 0",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              Certification aligns with:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              <li>
                <strong>USA:</strong> OSHA, EPA, Hazard Communication Standard
              </li>
              <li>
                <strong>EU:</strong> ECHA, EU-OSHA, EUR-Lex, European Commission
                (Employment and Inclusion)
              </li>
              <li>
                <strong>UAE:</strong> MOHRE, Domestic Workers and Professional
                Laws, Dubai Municipality Guidelines, Emirates Authority for
                Standardization
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
              6. Higher Employability and Salary Opportunities
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              <li>
                Certified workers and Professional are more attractive to
                international employers, leading to better job placement and
                higher salaries abroad.
              </li>
              <li>
                SkillEX Abroad connects trainees with job placement services
                post-certification.
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
              7. Empowerment through Skill Development
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                color: "#374151",
                lineHeight: "1.6",
              }}
            >
              <li>
                The program not only improves job prospects but also empowers
                workers and Professional with confidence, safety awareness, and
                professional standards, making them globally competitive.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {categories.map((cat) => (
        <section key={cat.id} style={{ marginBottom: "1.5rem" }}>
          <Accordion className="accordion" type="single" collapsible>
            <AccordionItem value={cat.id}>
              <AccordionHeader className="accordion-header">
                <AccordionTrigger className="accordion-trigger">
                  <div className="accordion-button">
                    <h2
                      style={{
                        margin: 0,
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        letterSpacing: 0.2,
                      }}
                    >
                      {cat.title}
                    </h2>
                    <ChevronDownIcon
                      className="accordion-chevron"
                      aria-hidden
                    />
                  </div>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="accordion-content">
                <CardGrid
                  items={(cat.courses || []).map((title, idx) => ({
                    id: `${cat.id}-${idx}`,
                    title,
                    fees: cat.fees,
                  }))}
                  type="courseItem"
                  onActionClick={handleBuyNow}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      ))}
    </div>
  );
};

export default Courses;
