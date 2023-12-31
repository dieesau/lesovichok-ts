import "./News.scss";
import React from "react";
import NewsItem from "./NewsItem";

import ni1 from '@/public/newsImg/3OgonxSWnLo.jpg'

const News = () => {
    return (
        <div className="news">
                <section>
                    <NewsItem
                        imageUrl={ni1}
                        headline="Новая Афиша!"
                        date={'06.08.2023'}
                        content={
                            <>
                                <p>уважаемые господа и дамы, пацаны и пацанессы!🧞🧚🏻</p>
                                <br />
                                <p>мы очень рады наконец представить вам афишу нашего замечательного мероприятия Лесовик&apos23, что пройдёт совсем скоро, на частном полигоне под г.Пущино! 🌿🌤</p>
                                <br />
                                <p>все подробности о проведении фестиваля также очень скоро появятся в наших соцсетях!</p>
                                <p>🤙🏻 stay tuned</p>
                                <br />
                                <p>💜 все ссылки тут <a className="link" href="https://taplink.cc/lesovikfest">taplink.cc/lesovikfest</a></p>
                                <p>💚poster by <a href="https://www.instagram.com/namastery/">@namastesooraj</a> (instagram)</p>
                            </>
                        }
                        />
                </section>
        </div>
    );
};

export default News;
