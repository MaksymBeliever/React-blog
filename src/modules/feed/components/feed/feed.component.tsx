import { FC, useState } from 'react';
import { Container } from '../../../../common/components/container/container.component';
import { ArticleList } from '../article-list/article-list.component';
import { FeedToggleComponent } from '../feed-toggle/feed-toggle.component';
import { useGetGlobalFeedQuery } from '../../api/repository';
import ReactPaginate from 'react-paginate';
import { FEED_PAGE_SIZE } from '../../consts';
import { useSearchParams } from 'react-router-dom';
import {serializeSearchParams} from "../../../../utils/router";

export const Feed: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage]
        = useState(searchParams.get('page') ? Number(searchParams.get('page') ) : 0);
    const handlePageChange = ({ selected }: { selected: number }) => {
        setPage(selected);
        setSearchParams(serializeSearchParams({ page: String(selected) }));
    }
    const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({ page });
    const amount = data?.articlesCount || 0;

    if (isLoading || isFetching) {
        return <Container>Feed is loading...</Container>;
    }

    if (error) {
        return <Container>Error while loading feed</Container>;
    }

    return (
        <Container>
            <FeedToggleComponent />
            <div className="flex">
                <div className="w-3/4">
                    <ArticleList list={data?.articles || []} />
                    <nav className="my-6">
                        <ReactPaginate
                            pageCount={amount / FEED_PAGE_SIZE}
                            pageRangeDisplayed={amount / FEED_PAGE_SIZE}
                            previousLabel={null}
                            nextLabel={null}
                            containerClassName="flex"
                            pageClassName="group"
                            pageLinkClassName="p-3 text-theme-blue bg-white border border-theme-blue -ml-px
                            group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r
                            hover:bg-theme-pageHoverBg"
                            activeClassName="active group"
                            activeLinkClassName="group-[.active]:bg-theme-blue group-[.active]:text-white"
                            onPageChange={handlePageChange}
                            forcePage={page}
                        />
                    </nav>
                </div>
                <div className="w-1/4 columns-2xs">tags</div>
            </div>
        </Container>
    );
}
