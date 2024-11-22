import React from "react";
import { SlArrowRight } from "react-icons/sl";

export const LocationCards = ({title, description}) => {
    return (
        <div>
            <div className="locationCartBox">
                <div>
                    <h2 className="cartTitle">{title}</h2>
                </div>
                <div className="alignmentDescription">
                    <p className="cartDescription">{description}</p> <SlArrowRight  className="cartIcon"/>
                </div>
            </div>
        </div>
    )
} 