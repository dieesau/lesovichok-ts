import React from "react";
import "./MainContent.scss";
import About from "@/../../../lesovichok2.0/lesovichok2/pages/About";
import News from "@/../../../lesovichok2.0/lesovichok2/pages/News";
import MapComponent from "@/../../../lesovichok2.0/lesovichok2/pages/Map";

const MainContent = ({ activeContent }) => {
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
