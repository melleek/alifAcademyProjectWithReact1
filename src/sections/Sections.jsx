import { SectionAside } from "./sectionAside/SectionAside";
import { SectionCustomer } from "./sectionCustomer/sectionCustomer";
import { SectionLocation } from "./sectionLocation/SectionLocation";
import { SectionPosts } from "./sectionPosts/sectionPosts";
import { SectionProducts } from "./sectionProducts/SectionProducts";
import { SectionWork } from "./sectionWork/SectionWork";

export const Sections = () => (
  <main className="allSections">
    <SectionWork />
    <SectionAside />
    <SectionProducts />
    <SectionLocation />
    <SectionCustomer />
    <SectionPosts />
  </main>
);
