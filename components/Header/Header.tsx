import React from "react";
import "./Header.scss";
import Image from "next/image";
import logoIMG from "@/public/logo.png";
import Navbar from "@/components/Navbar";

const Header = ({ onLogoClick }) => {
    return (
        <header className="header">
                <Image onClick={onLogoClick} className="header__logo-image" src={logoIMG} alt={"Логотип"} />
        </header>
    );
};

export default Header;
