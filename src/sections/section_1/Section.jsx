import React from "react";
import "./Section.css";
import InfoCard from "../../ui/infocard/InfoCard.jsx";
import home from "../../assets/icons/home.svg"
import list from "../../assets/icons/list.svg"
import key from "../../assets/icons/key.svg"

export default function FirstSection() {
    return (
        <div className="mainSection">
            <div className="container">
                <h1 className="workHow">How it works</h1>
                <p className="nunc">Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur
                    pellentesque. <br/> Maecenas varius felis felis.</p>
                <div className="info-cards-container">
                    <InfoCard
                        icon={home}
                        title="Find property"
                        description="Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non."
                    />
                    <InfoCard
                        icon={list}
                        title="Make a deal"
                        description="Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi."
                    />
                    <InfoCard
                        icon={key}
                        title="Get your keys"
                        description="Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat."
                    />
                </div>
            </div>
        </div>

    );

}
