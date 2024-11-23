import { cardInfo } from "../../api/api";
import { HeaderDescription } from "../../ui/headerDescription/HeaderDescription";
import { HeaderTitle } from "../../ui/headerTitle/HeaderTitle";
import { InfoCard } from "./components/InfoCard";

export const SectionWork = () => {
  return (
    <section className="mainSection">
      <header className="headerContent">
        <HeaderTitle title="How it works" />
        <HeaderDescription description="Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque. Maecenas varius felis felis." />
      </header>
      <div className="infoCardsContainer">
        {cardInfo.map((elem) => (
          <InfoCard {...elem} key={elem.id} />
        ))}
      </div>
    </section>
  );
};
