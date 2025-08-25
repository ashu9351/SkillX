import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import jobCategoriesData from '../data/jobCategories.json';

const JobCategories = () => {
  const [searchParams] = useSearchParams();
  const selectedCountry = searchParams.get('country');
  const nextPage = searchParams.get('next');

  // Get job categories from jobCategories data
  const jobCategories = jobCategoriesData.map(category => ({
    id: category.id,
    title: category.category,
    description: `Explore ${category.category} opportunities in ${selectedCountry}`,
    icon: getCategoryIcon(category.category)
  }));

  function getCategoryIcon(categoryTitle) {
    const iconMap = {
      'Professional Vehicle Operators': '🚛',
      'Last-Mile & Local Delivery': '📦',
      'Industrial Equipment Operators': '🏭',
      'Picking, Packing & Sorting': '📋',
      'Freight & Logistics Support': '🚢',
      'Workshop & Mechanical Support': '🔧',
      'Facility & Yard Maintenance': '🏗️',
      'Cleaning & Sanitation Crew': '🧹',
      'General Warehouse Operations': '📦',
      'Inventory & Stock Control': '📊',
      'Food Production & Processing': '🍳',
      'Cooking & Kitchen Support': '👨‍🍳',
      'Skilled Food & Beverage Roles': '🍺',
      'Hospitality Front-line & Guest Interaction': '👥',
      'Housekeeping & Facility Maintenance': '🏨',
      'Logistics & Warehouse Support': '🚚',
      'Security & Monitoring': '🔒',
      'Multi-Functional Roles & Support': '⚙️',
      'Facilities & Operations': '🏥',
      'Sanitation & Environmental Services': '🧼',
      'Clinical Support & Equipment Handling': '🩺',
      'Patient & Care Support Services': '👩‍⚕️',
      'Domestic & Personal Care Services': '🏠',
      'Property Maintenance & Technical Services': '🔨',
      'Cleaning & Sanitation Services': '🧽',
      'Outdoor, Grounds & Environmental Services': '🌳',
      'Transportation & Vehicle Services': '🚗',
      'Security & Waste Management Services': '🗑️',
      'Heavy Equipment & Machine Operators': '🚜',
      'Construction & General Trades': '🏗️',
      'HVAC, Mechanical & Fire Safety': '❄️',
      'Specialized Energy & Utility Jobs': '⚡',
      'Infrastructure & Industrial Work': '🏭',
      'Insulation & Environmental Control': '🧱',
      'Industrial Equipment & Machinery Maintenance': '⚙️',
      'Electrical, Low Voltage & Power Systems': '⚡',
      'Manufacturing, Assembly & Fabrication': '🏭',
      'Electronics & Precision Assembly': '🔌',
      'Vehicle Assembly & Production': '🚗',
      'Automotive Repair & Maintenance': '🔧',
      'Bee and Sericulture Worker': '🐝',
      'Auto Electrical & Electronics': '⚡',
      'Bodywork, Painting & Finishing': '🎨',
      'Machining, Welding & Fabrication': '🔥',
      'Quality Control & Inspection': '✅',
      'Logistics, Material Handling & Support': '📦',
      'Specialized Technicians': '👨‍🔧',
      'Livestock Farm Worker': '🐄',
      'Poultry Farm Worker': '🐔',
      'Crop and Horticulture Worker': '🌾',
      'Fisheries and Aquaculture Worker': '🐟',
      'Irrigation and Agronomy Technician': '💧',
      'Fertilizer and Pesticide Technician': '🌱',
      'Farm Machinery and Equipment Operator': '🚜',
      'Post-Harvest Handling': '📦',
      'General Farm Support': '🌾',
      'Unskilled': '👷'
    };
    return iconMap[categoryTitle] || '💼';
  }

  const handleCategoryClick = (category) => {
    // Redirect to contact form with job category and country info
    const params = new URLSearchParams({
      jobCategory: category.title,
      country: selectedCountry,
      source: 'jobs'
    });
    window.location.href = `/contact?${params.toString()}`;
  };

  return (
    <div>
      {/* Header */}
      <div className="page-header" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h1 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Job Categories in {selectedCountry}
        </h1>
        <p className="page-subtitle" style={{ fontSize: '1.125rem', color: '#6b7280' }}>
          Select a job category to explore available positions and apply
        </p>
      </div>

      {/* Job Categories Grid */}
      <div className="container" style={{ padding: '0 20px' }}>
        <div className="job-categories-grid">
          {jobCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem'
              }}>
                {category.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                {category.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {category.description}
              </p>
              <div style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                Explore Jobs →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <Link
          to={`/select-country?next=${nextPage}`}
          style={{
            backgroundColor: '#6b7280',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← Back to Country Selection
        </Link>
      </div>
    </div>
  );
};

export default JobCategories;
