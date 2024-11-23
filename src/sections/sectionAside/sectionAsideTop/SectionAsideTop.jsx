import { HeaderTitle } from "../../../ui/headerTitle/HeaderTitle";
import { HeaderDescription } from "../../../ui/headerDescription/HeaderDescription";
import ButtonS from "../../../ui/buttons/Button";
import interier from "../../../assets/images/asideTop.png";
import { InBanner } from "../../../ui/inBanner/InBanner";

export const SectionAsideTop = () => {
  return (
    <section className="sectionFirst">
      <aside className="asideLeftText">
        <InBanner title="Comfort first" />
        <header className="headerForAside">
          <HeaderTitle title="The best houses for family comfort" />
          <HeaderDescription description="Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit." />
        </header>
        <ButtonS />
      </aside>

      <aside>
        <img src={interier} alt="Interier" />
      </aside>
    </section>
  );
};
