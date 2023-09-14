import React, {useState} from "react";
import "./Sidebar.scss";

const Sidebar = ({ onButtonClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:w-1/4 md:w-1/3 w-full">
            <button
                className="sidebar-button lg:hidden md:hidden block mx-auto mt-4 px-4 py-2 border bg-purple-500 text-white"
                onClick={toggleSidebar}
            >
                Меню
            </button>

            <aside
                className={`lg:block md:block ${isOpen ? "block" : "sidebar hidden"} mt-4`}
            >
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
                <button
                    className="sidebar-button"
                    onClick={() => onButtonClick("КОНТАКТЫ")}
                >
                    КОНТАКТЫ
                </button>
            </aside>
        </div>
    );
};

export default Sidebar;
