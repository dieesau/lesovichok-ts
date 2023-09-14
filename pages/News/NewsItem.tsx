import React from "react";
import Image from "next/image";

const NewsItem = ({ imageUrl, headline, content, date }) => {
    return (
        <div className="news-block mb-6 flex flex-wrap">
            <div className="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                     data-te-ripple-init="" data-te-ripple-color="light">
                    <Image src={imageUrl} className="w-full" alt={headline} />
                    <a href="./NewsItem.tsx">
                        <div
                            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                        </div>
                    </a>
                </div>
            </div>

            <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                <h5 className="news-headline mb-3 text-lg font-bold">{headline}</h5>

                <p className="text-neutral-500 dark:text-neutral-300">
                    {content}
                </p>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    <small>
                        Опубликовано <u>{date}</u>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default NewsItem;
