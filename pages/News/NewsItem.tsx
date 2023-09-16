import React from "react";
import Image from "next/image";

const NewsItem = ({ imageUrl, headline, content, date }) => {
    return (
        <div className="news-block mb-6 flex flex-wrap">
            <Image src={imageUrl} className="news__image" alt={headline} />
            <a href="./NewsItem.tsx">
                <div
                    className="">
                </div>
            </a>
            <div className="">
                <h5 className="">{headline}</h5>
                <p className="">
                    {content}
                </p>
                <p className="">
                    <small>
                        Опубликовано <u>{date}</u>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default NewsItem;
