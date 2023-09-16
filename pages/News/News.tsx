import "./News.scss";
import React from "react";
import NewsItem from "./NewsItem";

import ni1 from '@/public/newsImg/3OgonxSWnLo.jpg'

const News = () => {
    return (
        <div className="news">
            <div className="container mx-auto md:px-6">
                <section className="mb-32 text-center md:text-left">
                    <h2 className="news-header mb-12 text-center text-3xl font-bold">НОВОСТИ</h2>
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
                                <p>💚poster by <a href="./News">@namastesooraj</a> (instagram)</p>
                            </>
                        }
                        />
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
                                <p>💚poster by <a className="link" href="./News">@namastesooraj</a> (instagram)</p>
                            </>
                        }
                    />
                </section>
            </div>
        </div>
    );
};

export default News;
