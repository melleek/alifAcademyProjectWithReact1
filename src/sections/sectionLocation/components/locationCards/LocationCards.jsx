import "./locationCards.css";
import { SlArrowRight } from "react-icons/sl";

export const LocationCards = ({ title, description }) => {
  return (
    <div className="locationCartBox">
      <h2 className="cartTitle">{title} </h2>
      <p className="cartDescription">
        {description} <SlArrowRight />
      </p>
    </div>
  );
};
