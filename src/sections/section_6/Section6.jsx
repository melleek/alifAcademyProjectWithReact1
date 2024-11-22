import React from "react";
import { LocationCards } from "./components/LocationCards";
import ButtonS from "../../ui/buttons/Button";
import { Banner } from "./components/Banner";

export const Section6 = () => {
    return (
        <div className="section-6">
            <h1 className="sectionTitle">Locations</h1>
            <p className="sectionDescription">
                Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna, aliquet non <br /> 
                nisl sit amet.
            </p>

            <div className="locationCartsContainer">
                <LocationCards title = 'San Francisco, CA' description = 'View Properties' />
                <LocationCards title = 'Los Angeles, CA' description = 'View Properties' />
                <LocationCards title = 'San Diego, CA' description = 'View Properties' />
            </div>


            <div className="locationCartsContainer2">
                <LocationCards title = 'New York, NY' description = 'View Properties' />
                <LocationCards title = 'Las Vegas, NV' description = 'View Properties' />
                <LocationCards title = 'Miami, FL' description = 'View Properties' />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '80px'}}>
                <ButtonS />
            </div>  

            <Banner />    
        </div>
    )
}