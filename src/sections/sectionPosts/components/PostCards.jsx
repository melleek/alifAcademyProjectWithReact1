import { SlArrowRight } from "react-icons/sl";
import "./postCards.css";
import { useState } from "react";

export const PostCards = ({ img, title, description, role, fullText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMore = () => setIsOpen(!isOpen);

  return (
    <div className="containerPostCards">
      <img src={img} alt="" />

      <div className="contentPostsCards">
        <div className="roleDateContent">
          <button className="roleButton">{role}</button>
          <p>May 10, 2022</p>
        </div>
        <h1 className="nameOfPost">{title}</h1>

        <p>{description}</p>

        {isOpen && <p>{fullText}</p>}

        <button className="btnReadMore" onClick={toggleReadMore}>
          {isOpen ? "Close" : "Read more"} <SlArrowRight size={10} />
        </button>
      </div>
    </div>
  );
};
