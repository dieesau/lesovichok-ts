import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ onButtonClick }: any) => {

    return (
        <div className="sidebar">
                <button className="sidebar-button" onClick={() => onButtonClick("О НАС")}>
                    О НАС
                </button>
                <button className="sidebar-button" onClick={() => onButtonClick("НОВОСТИ")}>
                    НОВОСТИ
                </button>
                {/*<button className="sidebar-button" onClick={() => onButtonClick("КАРТА")}>*/}
                {/*    КАРТА*/}
                {/*</button>*/}
                {/*<button className="sidebar-button" onClick={() => onButtonClick("БИЛЕТЫ")}>*/}
                {/*    БИЛЕТЫ*/}
                {/*</button>*/}
                <button className="sidebar-button" onClick={() => onButtonClick("КОНТАКТЫ")}>
                    КОНТАКТЫ
                </button>
            </div>
    );
};

export default Sidebar;
