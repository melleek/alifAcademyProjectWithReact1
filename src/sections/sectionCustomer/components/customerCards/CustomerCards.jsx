import { StarRating } from "../startRating";
import "./customerCards.css";

export const CustomerCards = ({ description, avatar, name, role }) => {
  return (
    <section className="customerCardContent">
      <div className="startRatingContent">
        <StarRating />
        <p>"{description}"</p>
      </div>
      <div className="customerContentAv">
        <img src={avatar} alt="" />
        <h2>
          {name}
          <p>{role}</p>
        </h2>
      </div>
    </section>
  );
};
