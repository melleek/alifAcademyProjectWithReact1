import { HeaderTitle } from "../../../ui/headerTitle/HeaderTitle";
import { HeaderDescription } from "../../../ui/headerDescription/HeaderDescription";
import ButtonS from "../../../ui/buttons/Button";
import interier from "../../../assets/images/asideBottom.png";
import { InfoCardAside } from "./components/infoCardAside";
import affordIcon from "../../../assets/icons/affordIcon.png";
import lessIcon from "../../../assets/icons/lessIcon.png";
import { InBanner } from "../../../ui/inBanner/InBanner";

export const SectionAsideBottom = () => {
  return (
    <section className="sectionAsideBottom">
      <aside>
        <img src={interier} alt="Interier" />
      </aside>

      <aside className="asideRightText">
        <InBanner title="Quick and easy" />
        <header className="headerForAsideBottom">
          <HeaderTitle title="Fast forward process" />
          <HeaderDescription description="Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl." />
        </header>
        <div className="infoCardAsideContent">
          <InfoCardAside
            title="Affordable prices"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
            icon={affordIcon}
          />
          <InfoCardAside
            title="Less paper work"
            description="Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi."
            icon={lessIcon}
          />
        </div>
        <ButtonS />
      </aside>
    </section>
  );
};
