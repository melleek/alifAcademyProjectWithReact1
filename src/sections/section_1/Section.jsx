import React from "react";
import "./Section.css";
import { InfoCard } from "./components/infocard/InfoCard";
import { cardInfo } from "../../api/api";

export const FirstSection = () => {
  return (
    <div className="mainSection">
      <h1 className="headerDescription">
        How it works
        <p>
          Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id
          efficitur pellentesque. <br /> Maecenas varius felis felis.
        </p>
      </h1>
      <div className="infoCardsContainer">
        {cardInfo.map((elem) => (
          <InfoCard {...elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
};
