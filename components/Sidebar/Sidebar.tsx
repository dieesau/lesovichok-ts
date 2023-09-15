import React, {useState} from "react";
import "./Sidebar.scss";

const Sidebar = ({ onButtonClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside>
            {/*<button*/}
            {/*    className="sidebar-button"*/}
            {/*    onClick={toggleSidebar}*/}
            {/*>*/}
            {/*    Меню*/}
            {/*</button>*/}

            <div className="sidebar">
                <button className="sidebar-button" onClick={() => onButtonClick("О НАС")}>
                    О НАС
                </button>
                <button className="sidebar-button" onClick={() => onButtonClick("НОВОСТИ")}>
                    НОВОСТИ
                </button>
                <button className="sidebar-button" onClick={() => onButtonClick("КАРТА")}>
                    КАРТА
                </button>
                <button className="sidebar-button" onClick={() => onButtonClick("БИЛЕТЫ")}>
                    БИЛЕТЫ
                </button>
                <button className="sidebar-button" onClick={() => onButtonClick("КОНТАКТЫ")}>
                    КОНТАКТЫ
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
