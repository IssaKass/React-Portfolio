import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const PricingPlanItem = ({ data }) => {
  return (
    <div className="pricing-plan">
      {data.popular && <span className="pricing-plan-popular">Popular</span>}
      <p>
        <span className="pricing-plan-price">{data.price}</span>
        <span className="pricing-plan-period">/{data.period}</span>
      </p>
      <h3 className="pricing-plan-name">{data.name}</h3>
      <p className="pricing-plan-description">{data.description}</p>
      <ul className="pricing-plan-list">
        {data.features &&
          data.features.map((feature, index) => (
            <li className="pricing-plan-item" key={index}>
              {feature}
            </li>
          ))}
      </ul>
      <a href="#" className="pricing-plan-link">
        Get the Plan <FaArrowRightLong />
      </a>
    </div>
  );
};

export default PricingPlanItem;
