import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface FeedToggleProps {

}

export const FeedToggleComponent: FC<FeedToggleProps> = () => {
    return (
        <div className="h-[30px]">
            <ul className="flex">
                <li>
                    <NavLink
                        to="/"
                        className="bg-white border-b-2 border-theme-blue py-2 px-4"
                    >
                        Global feed
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
