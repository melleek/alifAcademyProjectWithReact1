import { FirstSection } from "./section_1/Section";
import { SecondSection } from "./section_2/Section";
import { Section6 } from "./section_6/Section6";
import { SectionProducts } from "./sectionProducts/SectionProducts";

export const Sections = () => (
  <main className="allSections">
    <FirstSection />
    <SecondSection />
    <SectionProducts />
    <Section6 />
  </main>
);
