import Separator from "@/components/shared/separator";
import { STRENGTHS_DATA } from "@/config/constants/strengths-data";
import React from "react";

const HowItWorksSection = () => {
  return (
    <section id="hiw">
      <h2>Discover the Best and Authentic Spices from Wardan</h2>
      <div
        style={{
          opacity: 0.5,
        }}
      >
        <Separator />
      </div>

      <div className="hiw__items">
        {STRENGTHS_DATA.map((item, index) => {
          return (
            <div className="hiw__item" key={index}>
              <item.icon
                size={45}
                color="#B74652"
                style={{
                  marginBottom: "2rem",
                }}
              />
              <h3>{item.headline}</h3>
              <p>{item.paragraph}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
