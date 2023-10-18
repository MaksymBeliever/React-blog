import { FC } from 'react';
import { TagList } from '../tag-list/tag-list.component';
import { useGetPopularTagsQuery } from '../../api/repository';

export const TagCloud: FC = () => {
    const { data, isLoading, error, isFetching } = useGetPopularTagsQuery('');

    if (isLoading || isFetching) {
        return (
            <div className="bg-theme-tagCloudBg p-3 pt-1.5">
                <p className="mb-2">Loading popular tags...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-theme-tagCloudBg p-3 pt-1.5">
                <p className="mb-2">Error while loading popular tags...</p>
            </div>
        );
    }

    return (
        <div className="bg-theme-tagCloudBg p-3 pt-1.5">
            <p className="mb-2">Popular tags</p>
            <TagList
                list={data!.tags}
                itemStyle="DARK"
                itemAs="a"
            />
        </div>
    );
}
