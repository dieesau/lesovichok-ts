import React from "react";
import "./Navbar.scss"

const Navbar = ({ onButtonClick }) => {

    return (
        <div className="navbar">
            <button className="navbar-button" onClick={() => onButtonClick("О НАС")}>
                О НАС
            </button>
            <button className="navbar-button" onClick={() => onButtonClick("НОВОСТИ")}>
                НОВОСТИ
            </button>
            {/*<button className="navbar-button" onClick={() => onButtonClick("КАРТА")}>*/}
            {/*    КАРТА*/}
            {/*</button>*/}
            {/*<button className="navbar-button" onClick={() => onButtonClick("БИЛЕТЫ")}>*/}
            {/*    БИЛЕТЫ*/}
            {/*</button>*/}
            <button className="navbar-button" onClick={() => onButtonClick("КОНТАКТЫ")}>
                КОНТАКТЫ
            </button>
        </div>
    );
};

export default Navbar;
