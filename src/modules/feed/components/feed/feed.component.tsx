import { FC } from 'react';
import { Container } from '../../../../common/components/container/container.component';
import { ArticleList } from '../article-list/article-list.component';
import { FeedToggleComponent } from '../feed-toggle/feed-toggle.component';

interface FeedProps {

}

export const Feed: FC<FeedProps> = () => {
    return (
        <Container>
            <FeedToggleComponent />
            <div className="flex">
                <ArticleList />
                <div className="w-1/4 columns-2xs">tags</div>
            </div>
        </Container>
    );
}
