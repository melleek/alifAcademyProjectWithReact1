import React from "react";
import "./InfoCard.css";

export const InfoCard = ({ icon, title, description }) => (
  <div className="infoCard">
    <img src={icon} alt={title} />
    <h3 className="infoCardTitle">
      {title}
      <p>{description}</p>
    </h3>
  </div>
);
