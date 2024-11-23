import "./productCard.css";
import { FaBath, FaBed, FaMapMarkerAlt, FaPen, FaTrash } from "react-icons/fa";
import { RxRulerSquare } from "react-icons/rx";

export const ProductCard = ({
  img,
  title,
  price,
  location,
  bathText,
  rulerText
}) => {
  return (
    <section className="cardContent">
      <img src={img} alt="IMG" />

      <div className="cardTextContent">
        <h1 className="headerCard">
          {title} <p>{price}</p>
        </h1>

        <p className="locationContent">
          <FaMapMarkerAlt color="#65665C" />
          {location}
        </p>

        <div className="containerIcons">
          <div className="contentIcons">
            <p>
              <FaBath
                style={{ width: "15px", height: "15px", color: "#65665C" }}
              />
              {bathText}
            </p>

            <p>
              <RxRulerSquare style={{ color: "#65665C" }} />
              {rulerText}
            </p>
          </div>

          <div className="editDeleteContent">
            <button className="isCompleted">active</button>
            <FaPen color="#65665C" />
            <FaTrash color="red" />
          </div>
        </div>
      </div>
    </section>
  );
};
