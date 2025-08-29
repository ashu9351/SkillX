import { useMemo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { State, City } from "country-state-city";
import jobCategoriesData from "../data/jobCategories.json";

const ContactForm = ({ country = "", showLocationFields = false, onClose }) => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    village: "",
    query: searchParams.get("query") || "Become Our Partner",
    description: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Job-related state
  const [selectedJobCategory, setSelectedJobCategory] = useState(
    searchParams.get("jobCategory") || ""
  );

  const [selectedSpecificJob, setSelectedSpecificJob] = useState("");

  const source = searchParams.get("source");
  const isJobApplication = source === "jobs";
  const isCourseEnquiry = searchParams
    .get("query")
    ?.toLowerCase()
    .includes("course");
  console.log(isCourseEnquiry);

  const states = useMemo(() => {
    const list = State.getStatesOfCountry("IN") || [];
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, []);
  const [selectedState, setSelectedState] = useState(""); // isoCode
  const selectedStateObj = useMemo(
    () => states.find((s) => s.isoCode === selectedState) || null,
    [states, selectedState]
  );
  const sortedCities = useMemo(() => {
    if (!selectedState) return [];
    const list = City.getCitiesOfState("IN", selectedState) || [];
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedState]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      country: showLocationFields ? "India" : country,
      state: showLocationFields ? selectedStateObj?.name || "" : undefined,
      city: showLocationFields ? selectedCity : undefined,
      // Add job information for job applications
      ...(isJobApplication && {
        jobCategory: selectedJobCategory,
        specificJob: selectedSpecificJob,
        source: "job-application",
      }),
    };
    alert("Form submitted successfully!");
    setIsSuccess(true);
    console.log("Form data:", payload);
  };

  return (
    <div className="contact-form-container">
      {!isSuccess ? (
        <>
          <h2>{isJobApplication ? "Job Application Form" : "Contact Us"}</h2>

          <form action="https://formspree.io/f/manbzylo" method="POST">
            {/* Hidden inputs for job information */}
            {isJobApplication && (
              <>
                <input
                  type="hidden"
                  name="jobCategory"
                  value={selectedJobCategory}
                />
                <input
                  type="hidden"
                  name="specificJob"
                  value={selectedSpecificJob}
                />
                <input type="hidden" name="source" value="job-application" />
              </>
            )}
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <div className="phone-input-container">
                <span className="phone-prefix">IN</span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 7878506640"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            {showLocationFields ? (
              <>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value="India"
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    name="state"
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedCity("");
                    }}
                    required
                  >
                    <option value="" disabled>
                      Select State
                    </option>
                    {states.map((st) => (
                      <option key={st.isoCode} value={st.isoCode}>
                        {st.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <select
                    id="city"
                    name="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    required
                    disabled={!selectedState}
                  >
                    <option value="" disabled>
                      {selectedState ? "Select City" : "Select State first"}
                    </option>
                    {sortedCities.map((ct) => (
                      <option key={ct.name} value={ct.name}>
                        {ct.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="village">Village *</label>
                  <input
                    id="village"
                    name="village"
                    type="text"
                    placeholder="Enter your village"
                    value={formData.village}
                    onChange={(e) => handleChange("village", e.target.value)}
                    required
                  />
                </div>
              </>
            ) : (
              country && (
                <div className="form-group">
                  <label htmlFor="countryReadOnly">Country</label>
                  <input
                    id="countryReadOnly"
                    name="country"
                    type="text"
                    value={country}
                    readOnly
                  />
                </div>
              )
            )}

            {/* Job Category and Specific Job Fields for Job Applications */}
            {isJobApplication && (
              <>
                <div className="form-group">
                  <label htmlFor="jobCategory">Job Category *</label>
                  <select
                    id="jobCategory"
                    name="jobCategory"
                    value={selectedJobCategory}
                    onChange={(e) => {
                      setSelectedJobCategory(e.target.value);
                      setSelectedSpecificJob(""); // Reset specific job when category changes
                    }}
                    required
                  >
                    <option value="" disabled>
                      Select Job Category
                    </option>
                    {jobCategoriesData
                      .sort((a, b) => a.category.localeCompare(b.category))
                      .map((category) => (
                        <option key={category.id} value={category.category}>
                          {category.category}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="specificJob">Job Profile *</label>
                  <select
                    id="specificJob"
                    name="specificJob"
                    value={selectedSpecificJob} // Ensure value is set on page load
                    onChange={(e) => setSelectedSpecificJob(e.target.value)}
                    required
                    disabled={!selectedJobCategory}
                  >
                    <option value="" disabled>
                      {selectedJobCategory
                        ? "Select Specific Job"
                        : "Select Job Category first"}
                    </option>
                    {selectedJobCategory &&
                      jobCategoriesData
                        .find((cat) => cat.category === selectedJobCategory)
                        ?.jobs.map((job, index) => (
                          <option key={index} value={job}>
                            {job}
                          </option>
                        ))}
                  </select>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="query">Query *</label>
              <input
                id="query"
                name="query"
                type="text"
                placeholder={
                  isJobApplication
                    ? "Job application details"
                    : "What can we help you with?"
                }
                value={
                  isJobApplication
                    ? `Job Application - ${selectedJobCategory}${
                        selectedSpecificJob ? ` - ${selectedSpecificJob}` : ""
                      }`
                    : formData.query
                }
                onChange={(e) => handleChange("query", e.target.value)}
                required
                readOnly={isJobApplication}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">
                {isJobApplication ? "Additional Information" : "Description"}
              </label>
              <textarea
                id="description"
                name="description"
                placeholder={
                  isJobApplication
                    ? "Tell us about your experience, skills, and why you're interested in this position..."
                    : "Tell us more about your requirements..."
                }
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                rows={4}
              />
            </div>

            <button type="submit" className="submit-button">
              {isJobApplication ? "Submit Job Application" : "Submit"}
            </button>
          </form>
        </>
      ) : (
        <>
          <p className="success-message">
            {isJobApplication
              ? "Thank you for your job application! Our recruitment team will review your application and contact you soon."
              : "Thank you for your message! Our team will reach out to you soon."}
          </p>
          <button
            className="contact-success-btn"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </button>
        </>
      )}
    </div>
  );
};

export default ContactForm;
