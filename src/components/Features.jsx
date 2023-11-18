import React from "react";
import SectionHeading from "./SectionHeading";
import FeatureItem from "./FeatureItem";

const Features = ({ isDark, features }) => {
  return (
    <section
      id="features"
      className="bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle={"Saas features"}
          title={"Our software's core features"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          }
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features &&
            features.map((feature) => (
              <FeatureItem key={feature.id} data={feature} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
