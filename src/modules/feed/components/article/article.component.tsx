import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../favorite-button/favorite-button.component';
import { TagList } from '../tag-list/tag-list.component';

interface ArticleProps {

}

export const Article: FC<ArticleProps> =({}) => {
    return (
        <article>
            <div className="border-t border-black/10 py-6">
                <div className="mb-4 font-light flex">
                    <Link to="/@noname">
                        <img
                            src="https://api.realworld.io/images/demo-avatar.png"
                            alt="user avatar"
                            className="inline-block h-8 w-8 rounded-full"
                        />
                    </Link>
                    <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
                        <Link to="/@noname" className="">Noname</Link>
                        <span className="text-theme-lightGray text-date">14 October, 2023</span>
                    </div>
                    <FavoriteButton />
                </div>
                <Link to="/article/qwert" className="hover:no-underline">
                    <h1 className="mb-1 font-semibold text-2xl text-theme-gray">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, illo!
                    </h1>
                    <p className="text-theme-lightGray font-light">Lorem ipsum dolor sit amet.</p>
                    <div className="flex justify-between">
                        <span className="text-theme-lightGray text-date font-light">Read more...</span>
                        <TagList />
                    </div>
                </Link>
            </div>
        </article>
    );
}
