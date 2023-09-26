import React from "react";
import Image from "next/image";

const NewsItem = ({ imageUrl, headline, content, date }: any) => {
    return (
        <div className="news__block">
            <Image src={imageUrl} className="news__image" alt={headline} />
            <div className="">
                <h5 className="news__header">{headline}</h5>
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
