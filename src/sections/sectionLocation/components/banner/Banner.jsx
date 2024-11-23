import "./banner.css";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { ButtonBrick } from "../../../../ui/buttonBrick/ButtonBrick";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="bannerIcon">
        <MdOutlineFamilyRestroom size={35} color="#65665C" />
      </div>
      <h2 className="bannerTitle">Families are our priority</h2>
      <p className="bannerDescription">
        Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non,{" "}
        placerat vel arcu. In non <br />
        consectetur lorem. Morbi non varius sapien suscipit mauri.
      </p>
      <ButtonBrick text="Get started" />
    </section>
  );
};
