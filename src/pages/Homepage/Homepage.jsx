import React from "react";
import "./Homepage.css";

import { featuresData } from "../../localData/featuresData";

import Features from "../../components/Features/Features";



function Homepage() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="index-sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="index-sr-only">Features</h2>
        {featuresData.map((feature) => (
          <Features
            key={feature.id}
            src={feature.src}
            alt={feature.alt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Homepage;
