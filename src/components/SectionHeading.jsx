import React from "react";

const SectionHeading = ({ title, subtitle, info }) => {
  return (
    <div className="section-heading">
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-info">{info}</p>
    </div>
  );
};

export default SectionHeading;
