import { FC } from 'react';

interface FavoriteButtonProps {
    count: number;
}

export const FavoriteButton: FC<FavoriteButtonProps> =({ count }) => {
    return (
        <button
            className="flex text-theme-blue border-theme-blue text-center align-middle items-center
            cursor-pointer select-none border py-1 px-2 text-sm rounded-buttonSm hover:text-white
            hover:bg-theme-blue focus:text-white focus:bg-theme-darkBlue"
        >
            <i className="fa-solid fa-heart"></i>
            <span className="ml-1 font-normal">{count}</span>
        </button>
    );
}
