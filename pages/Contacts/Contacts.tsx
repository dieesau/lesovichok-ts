import React from "react";
import "./Contacts.scss"

import vkLogo from "../../public/VK Logo.png"
import tgLogo from "../../public/tg_logo.png"
import Image from "next/image";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__telegram">
                <Image className="logo" src={tgLogo} alt="tg logo"></Image>
                 МЫ В ТЕЛЕГРАМ:
                <p>ЧАТ <a className="link" href="https://t.me/lesovikfest">t.me/lesovikfest</a></p>
                <p>КАНАЛ <a className="link" href="https://t.me/festlesovik">t.me/festlesovik</a></p>
            </div>
            <br />
            <div className="contacts__other">
                <Image className="logo" src={vkLogo} alt="vk logo"></Image>
                 МЫ ВО ВКОНТАКТЕ
                <p>ЛЕСОВИК 2023 <a className="link" href="https://vk.com/lesovik2023">vk.com/lesovik2023</a></p>
            </div>
        </div>
    );
};

export default Contacts;
