import { useState } from "react";
import { data } from "../../api/api";
import { FaBath, FaBed, FaMapMarkerAlt, FaPen, FaTrash } from "react-icons/fa";
import { RxRulerSquare } from "react-icons/rx";
import ButtonS from "../../ui/buttons/Button";

export function SectionProducts() {
  const [todos, setTodos] = useState(data);

  return (
    <section className="sectionProducts">
      <img src="../assets/icons/iconsCr.png" alt="" />
      <div className="cardContainer">
        <div className="allCardContent">
          {todos.map((elem) => {
            return (
              <div key={elem.id} className="cardContent">
                <img src={elem.img} alt="" />
                <div className="cardTextContent">
                  <h1>
                    {elem.title} <p>{elem.price}</p>
                  </h1>
                  <p>
                    <FaMapMarkerAlt color="#65665C" />
                    {elem.location}
                  </p>
                  <div>
                    <div>
                      <FaBath />
                      <FaBed />
                      <RxRulerSquare style={{ marginRight: "5px" }} />
                    </div>
                    <FaPen color="#65665C" />
                    <FaTrash color="red" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ButtonS />
      </div>
    </section>
  );
}
