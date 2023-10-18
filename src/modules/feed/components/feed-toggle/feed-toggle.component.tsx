import { FC } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

interface FeedToggleProps {

}

export const FeedToggleComponent: FC<FeedToggleProps> = () => {
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');

    const globalFeedClasses = clsx(
        'bg-white border-theme-blue py-2 px-4 hover:text-black/60 hover:no-underline',
        {
            'text-black/30': tag,
            'border-b-2': !tag
        }
    );

    return (
        <div className="h-[30px]">
            <ul className="flex">
                <li>
                    <NavLink
                        to="/"
                        className={globalFeedClasses}
                    >
                        Global feed
                    </NavLink>
                    {tag && (
                        <span className="bg-white border-b-2 border-theme-blue py-2 px-4 text-theme-blue">
                            # {tag}
                        </span>
                    )}
                </li>
            </ul>
        </div>
    );
}
