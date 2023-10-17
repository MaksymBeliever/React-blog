import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../favorite-button/favorite-button.component';
import { TagList } from '../tag-list/tag-list.component';
import { FeedArticle } from '../../api/dto/global-feed.in';
import { DateTime } from 'luxon';

interface ArticleProps extends FeedArticle {}

export const Article: FC<ArticleProps> =({
                                             author,
                                             createdAt,
                                             favoritesCount,
                                             title,
                                             description,
                                             tagList,
                                         }) => {
    return (
        <article>
            <div className="border-t border-black/10 py-6">
                <div className="mb-4 font-light flex justify-between">
                    <div className="flex">
                        <Link to={`/@${author.username}`}>
                            <img
                                src={author.image}
                                alt={`${author.username} avatar`}
                                className="inline-block h-8 w-8 rounded-full"
                            />
                        </Link>
                        <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
                            <Link to={`/@${author.username}`} className="">{author.username}</Link>
                            <span className="text-theme-lightGray text-date">
                            {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}
                        </span>
                        </div>
                    </div>
                    <FavoriteButton count={favoritesCount} />
                </div>
                <Link to="/article/qwert" className="hover:no-underline">
                    <h1 className="mb-1 font-semibold text-2xl text-theme-gray">{title}</h1>
                    <p className="text-theme-lightGray font-light">{description}</p>
                    <div className="flex justify-between">
                        <span className="text-theme-lightGray text-date font-light">Read more...</span>
                        <TagList list={tagList} />
                    </div>
                </Link>
            </div>
        </article>
    );
}
