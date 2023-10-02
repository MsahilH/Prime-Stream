import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchDataFromApi } from '../../utils/api';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import './searchstyle.scss'
import Spinner from '../../components/spinner/Spinner.jsx'
import ResultFallback from '../../assets/no-results.png'
import MovieCard from '../../components/searchMovieCard/movieCard';

const SearchReasult = () => {
  const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1); // 20 data comes in every page.
    const [loading, setLoading] = useState(false);
    const { query } = useParams();
    const fallBack = ResultFallback;
    console.log('this is params', query);
    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    setData({
                        ...data, // all other data of that purticular search remain same.
                        results: [...data?.results, ...res.results], //result data increase with scroll.
                    });
                } else {
                    setData(res); // if no data comes.
                }
                setPageNum((prev) => prev + 1);
            }
        ); // goes search result into the query variable and with scroll page number change in API call.
    };

    useEffect(() => {
        console.log('it start');
        setPageNum(1);
        fetchInitialData();
    }, [query]);
  return (
    <div className="searchResultsPage">
            {loading && <Spinner initial={true} />}
            {!loading && (
                <ContentWrapper>
                    {data?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle">
                                {`Search ${
                                    data?.total_results > 1
                                        ? "results"
                                        : "result"
                                } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<Spinner />}
                            >   
                            {/* can understand different props from there official page */}
                                {data?.results.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            fromSearch={true}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : ( 
                        <span className="resultNotFound">
                            Sorry, Results not found!
                        </span>
                    )}
                </ContentWrapper>
            )}
        </div>
  )
}

export default SearchReasult;