import "./infoCardAside.css";
export const InfoCardAside = ({ title, description, icon }) => {
  return (
    <div className="infoCardAside">
      <img src={icon} alt="icons" />
      <h1>
        {title}
        <p>{description}</p>
      </h1>
    </div>
  );
};
