import React from "react";
import SectionHeading from "./SectionHeading";
import PricingPlanItem from "./PricingPlanItem";

const PricingPlans = ({ isDark, pricingPlans }) => {
  return (
    <section
      id="pricing"
      className="bg-blue-50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle={"Pricing plans"}
          title={"Simple pricing"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          }
        />
        <div className="mt-6 md:px-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {pricingPlans &&
            pricingPlans.map((pricingPlan) => (
              <PricingPlanItem key={pricingPlan.id} data={pricingPlan} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
