import React from "react";
import { LocationCards } from "./components/locationCards/LocationCards";
import ButtonS from "../../ui/buttons/Button";
import { Banner } from "./components/banner/Banner";
import { HeaderTitle } from "../../ui/headerTitle/HeaderTitle";
import { HeaderDescription } from "../../ui/headerDescription/HeaderDescription";

export const SectionLocation = () => {
  return (
    <main className="sectionLocation">
      <section className="locatinContainer">
        <div className="headerContent">
          <HeaderTitle title="Locations" />
          <HeaderDescription description=" Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna, aliquet non nisl sit amet." />
        </div>

        <div className="locationCartsContainer">
          <LocationCards
            title="San Francisco, CA"
            description="View Properties"
          />
          <LocationCards
            title="Los Angeles, CA"
            description="View Properties"
          />
          <LocationCards title="San Diego, CA" description="View Properties" />

          <LocationCards title="New York, NY" description="View Properties" />
          <LocationCards title="Las Vegas, NV" description="View Properties" />
          <LocationCards title="Miami, FL" description="View Properties" />
        </div>

        <ButtonS />
      </section>

      <Banner />
    </main>
  );
};
