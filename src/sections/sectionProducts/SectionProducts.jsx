import { data } from "../../api/api";
import ButtonS from "../../ui/buttons/Button";
import { HeaderTitle } from "../../ui/headerTitle/HeaderTitle";
import { InBanner } from "../../ui/inBanner/InBanner";
import { ProductCard } from "./components/ProductCard";

export function SectionProducts() {
  return (
    <main className="sectionProducts">
      <img src="src/assets/images/kvRight.png" className="rightKvIcons" />

      <section className="containerProducts">
        <div className="headerContentPro">
          <InBanner title="Properties" />
          <HeaderTitle title="Houses in your favorite area" />
        </div>
        <div className="cardContainer">
          <div className="allCardContent">
            {data.map((elem) => (
              <ProductCard {...elem} key={elem.id} />
            ))}
          </div>
          <ButtonS />
        </div>
      </section>

      <img src="src/assets/images/kvLeft.png" className="leftKvIcons" />
    </main>
  );
}
