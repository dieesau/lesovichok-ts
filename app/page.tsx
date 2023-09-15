"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const App = () => {
    const [activeContent, setActiveContent] = useState("");

    const handleButtonClick = (content) => {
        setActiveContent(content);
    };

    const handleLogoClick = () => {
        setActiveContent("empty");
    };

    return (
        <div>
            <Header onLogoClick={handleLogoClick} />
            <Sidebar onButtonClick={handleButtonClick} />
            <MainContent activeContent={activeContent} />
        </div>
    );
};

export default App;
