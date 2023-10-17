import { FC } from 'react';
import { Container } from '../../../../common/components/container/container.component';
import { ArticleList } from '../article-list/article-list.component';
import { FeedToggleComponent } from '../feed-toggle/feed-toggle.component';
import { useGetGlobalFeedQuery } from '../../api/repository';

interface FeedProps {

}

export const Feed: FC<FeedProps> = () => {
    const { data, error, isLoading } = useGetGlobalFeedQuery('');

    if (isLoading) {
        return <Container>Feed is loading...</Container>;
    }

    if (error) {
        return <Container>Error while loading feed</Container>;
    }

    return (
        <Container>
            <FeedToggleComponent />
            <div className="flex">
                <ArticleList list={data?.articles || []} />
                <div className="w-1/4 columns-2xs">tags</div>
            </div>
        </Container>
    );
}
