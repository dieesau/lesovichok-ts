import React from "react";
import "./MainContent.scss";
import About from "../../pages/About"
import News from "../../pages/News";
import MapComponent from "../../pages/Map";
import Contacts from "../../pages/Contacts";

const MainContent = ({ activeContent }:any) => {
  return (
    <main className="main-content">
      {activeContent === "О НАС" && <About />}
      {activeContent === "НОВОСТИ" && <News />}
      {activeContent === "КАРТА" && <MapComponent />}
      {/*{activeContent === "БИЛЕТЫ" && (*/}
      {/*  <div>*/}
      {/*    БИЛЕТЫ*/}
      {/*  </div>*/}
      {/*)}*/}
      {activeContent === "КОНТАКТЫ" && <Contacts />}
    </main>
  );
};

export default MainContent;
