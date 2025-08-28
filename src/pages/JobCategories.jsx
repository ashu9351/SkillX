import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import jobCategoriesData from "../data/jobCategories.json";

const icons = new Map([
  [1, "fa-solid fa-tractor"],
  [2, "fa-solid fa-car"],
  [3, "fa-solid fa-plane"],
  [4, "fa-solid fa-dna"],
  [5, "fa-solid fa-broom"],
  [6, "fa-solid fa-headset"],
  [7, "fa-solid fa-briefcase"],
  [8, "fa-solid fa-hard-hat"],
  [9, "fa-solid fa-language"],
  [10, "fa-solid fa-palette"],
  [11, "fa-solid fa-headset"],
  [12, "fa-solid fa-cart-shopping"],
  [13, "fa-solid fa-graduation-cap"],
  [14, "fa-solid fa-microchip"],
  [15, "fa-solid fa-bolt"],
  [16, "fa-solid fa-compass-drafting"],
  [17, "fa-solid fa-industry"],
  [18, "fa-solid fa-user-tie"],
  [19, "fa-solid fa-coins"],
  [20, "fa-solid fa-utensils"],
  [21, "fa-solid fa-user-nurse"],
  [22, "fa-solid fa-hotel"],
  [23, "fa-solid fa-house"],
  [24, "fa-solid fa-users"],
  [25, "fa-solid fa-gears"],
  [26, "fa-solid fa-computer"],
  [27, "fa-solid fa-scale-balanced"],
  [28, "fa-solid fa-industry"],
  [29, "fa-solid fa-bullhorn"],
  [30, "fa-solid fa-person-digging"],
  [31, "fa-solid fa-hand-holding-heart"],
  [32, "fa-solid fa-oil-well"],
  [33, "fa-solid fa-building"],
  [34, "fa-solid fa-store"],
  [35, "fa-solid fa-chart-line"],
  [36, "fa-solid fa-flask-vial"],
  [37, "fa-solid fa-ship"],
  [38, "fa-solid fa-shirt"],
  [39, "fa-solid fa-truck"],
  [40, "fa-solid fa-people-group"],
  [41, "fa-solid fa-warehouse"],
]);

const JobCategories = () => {
  const [searchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country");
  const nextPage = searchParams.get("next");

  // Get job categories from jobCategories data
  const jobCategories = jobCategoriesData.map((category) => ({
    id: category.id,
    title: category.category,
    description: `Explore ${category.category} opportunities in ${selectedCountry}`,
    icon: icons.get(category.id),
  }));

  const handleCategoryClick = (category) => {
    // Redirect to contact form with job category and country info
    const params = new URLSearchParams({
      jobCategory: category.title,
      country: selectedCountry,
      source: "jobs",
    });
    window.location.href = `/contact?${params.toString()}`;
  };

  return (
    <div>
      {/* Header */}
      <div
        className="page-header"
        style={{ padding: "2rem 0", textAlign: "center" }}
      >
        <h1
          className="page-title"
          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
        >
          Job Categories in {selectedCountry}
        </h1>
        <p
          className="page-subtitle"
          style={{ fontSize: "1.125rem", color: "#6b7280" }}
        >
          Select a job category to explore available positions and apply
        </p>
      </div>

      {/* Job Categories Grid */}
      <div className="container" style={{ padding: "0 20px" }}>
        <div className="job-categories-grid">
          {jobCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <div
                style={{
                  fontSize: "4rem",
                  marginBottom: "1.5rem",
                }}
              >
                <i className={`category-icon ${category.icon}`}></i>
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "1rem",
                }}
              >
                {category.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                {category.description}
              </p>
              <div
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                Explore Jobs →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <Link
          to={`/select-country?next=${nextPage}`}
          style={{
            backgroundColor: "#6b7280",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          ← Back to Country Selection
        </Link>
      </div>
    </div>
  );
};

export default JobCategories;
