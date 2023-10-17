import { FC } from 'react';

interface TagListProps {

}

export const TagList: FC<TagListProps> = () => {
    return (
        <ul className="flex">
            <li className="font-light text-date border border-theme-darkGray
                text-theme-tag mr-1 mb-0.2 px-tag rounded-tag"
            >
                1
            </li>
            <li className="font-light text-date border border-theme-darkGray
                text-theme-tag mr-1 mb-0.2 px-tag rounded-tag"
            >
                2
            </li>
            <li className="font-light text-date border border-theme-darkGray
                text-theme-tag mr-1 mb-0.2 px-tag rounded-tag"
            >
                3
            </li>
            <li className="font-light text-date border border-theme-darkGray
                text-theme-tag mr-1 mb-0.2 px-tag rounded-tag"
            >
                4
            </li>
        </ul>
    );
}
