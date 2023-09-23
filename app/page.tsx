"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Navbar from "@/components/Navbar";

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
            <Navbar onButtonClick={handleButtonClick} />
            <Sidebar onButtonClick={handleButtonClick} />
            <MainContent activeContent={activeContent} />
        </div>
    );
};

export default App;
