import React from "react";
import kittens from "../img/kittens.jpg";

const Header = () => {
    return (
        <header className="header">
            <img className="heroImg" src={kittens} alt="min mægler ejendom" />
            <div className="heroTextContainer">
                <h1 className="whiteText">Foreningen for Dyrevelfærd</h1>
                <h3 className="whiteText">Vi specialisere os i dyrevelfærd</h3>
            </div>
        </header>
    );
};

export default Header;
