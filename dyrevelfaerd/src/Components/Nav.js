import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Nav = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="navContainer">
            <nav className="nav">
                <div className="ulNav">
                    <Link className="navLinkLogo" to="/">
                        <img
                            className="navLogo"
                            src={logo}
                            alt="min mægler ejendom"
                        />
                    </Link>
                    <Link className="navLinkText" to="/">
                        <h3>Foreningen for Dyrevelfærd</h3>
                    </Link>
                </div>
                <ul className="ulNav">
                    <li className="ulNavLi">
                        <Link className="navLink" to="/">
                            <NavItem title="Hjem" />
                        </Link>
                    </li>
                    <li className="ulNavLi">
                        <Link className="navLink" to="/Omos">
                            <NavItem title="Om os" />
                        </Link>
                    </li>
                    <li className="ulNavLi">
                        <Link className="navLink" to="/Blivfrivillig">
                            <NavItem title="Bliv Frivillig" />
                        </Link>
                    </li>
                    <li className="ulNavLi">
                        <Link className="navLink" to="/Dyrinoed">
                            <NavItem title="Dyr i nød" />
                        </Link>
                    </li>
                    <li className="ulNavLi">
                        <Link className="navLink" to="/Dyrhosos">
                            <NavItem title="Adopter et dyr" />
                        </Link>
                    </li>
                </ul>

                <div className="burgerNav">
                    <button onClick={handleOpen}>
                        <h2>==</h2>
                        <h2 className="minusmargin">==</h2>
                    </button>
                    {open ? (
                        <div className="">
                            <ul className="ulDropdown">
                                <li className="liDropdown">
                                    <Link className="navLink" to="/">
                                        <NavItem title="Hjem" />
                                    </Link>
                                </li>
                                <li className="">
                                    <Link className="navLink" to="/Omos">
                                        <NavItem title="Om os" />
                                    </Link>
                                </li>
                                <li className="">
                                    <Link
                                        className="navLink"
                                        to="/Blivfrivillig"
                                    >
                                        <NavItem title="Bliv Frivillig" />
                                    </Link>
                                </li>
                                <li className="">
                                    <Link className="navLink" to="/Dyrinoed">
                                        <NavItem title="Dyr i nød" />
                                    </Link>
                                </li>
                                <li className="">
                                    <Link className="navLink" to="/Dyrhosos">
                                        <NavItem title="Adopter et dyr" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="none">Is Closed</div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Nav;
