import React from "react";
import "./MainContent.scss";
import About from "../../pages/About"
import News from "../../pages/News";
import MapComponent from "../../pages/Map";

const MainContent = ({ activeContent }:any) => {
  return (
    <main className="main-content">
      {activeContent === "О НАС" && <About />}
      {activeContent === "НОВОСТИ" && <News />}
      {activeContent === "КАРТА" && <MapComponent />}
      {activeContent === "БИЛЕТЫ" && (
        <div>
          БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ
          БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ
          БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ БИЛЕТЫ
        </div>
      )}
      {activeContent === "КОНТАКТЫ" && (
        <div>
          КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ
          КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ
          КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ КОНТАКТЫ
        </div>
      )}
    </main>
  );
};

export default MainContent;
