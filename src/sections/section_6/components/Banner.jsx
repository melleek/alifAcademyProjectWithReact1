import React from "react";
import { MdOutlineFamilyRestroom } from "react-icons/md";

export const Banner = () => {
    return (
        <div className="banner">
            <div className="bannerIcon">
                <MdOutlineFamilyRestroom size={35} />
            </div>
            <h2 className="bannerTitle">Families are our priority</h2>
            <p className="bannerDescription">
                Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, <br /> 
                placerat vel arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.
            </p>
            <div className="bannerBtn">Get started</div>
        </div>
    )
}