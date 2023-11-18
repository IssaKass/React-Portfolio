import React from "react";

const FeatureItem = ({ data }) => {
  return (
    <div className="feature">
      <img src={data.icon} alt="icon" className="feature-icon" />
      <div>
        <h3 className="feature-name">{data.name}</h3>
        <p className="feature-info">{data.info}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
