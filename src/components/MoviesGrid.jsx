import { useEffect, useState, React } from "react";
import { MoviesCard } from "./MoviesCard";
import style from "./MoviesGrid.module.css";
import { getApi } from "../utils/httpClient";
import Spinner from "./Spinner";
import { useQuery } from "../hoocks/UseQuery";
import InfiniteScroll from "react-infinite-scroll-component";

// function useQuery() {
//     const { search } = useLocation();
//     return React.useMemo(() => new URLSearchParams(search), [search]);
//   }

export function MoviesGrid() {
    let query = useQuery();
    const search = query.get("search");

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState();
    const [page, setPage] = useState(1)
    const [hasMore, setHasmore] = useState(true);
    console.log(page)

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? `/search/movie?query=${search}&page=${page}`
            : `/discover/movie?page=${page}`;
        getApi(searchUrl).then((data) => {
            setHasmore(data.page < data.total_pages)
            setMovies(prevMovi => prevMovi.concat(data.results));
            setIsLoading(false);
        });
    }, [search, page]);

    // if (isLoading) {
    //     return <Spinner />;
    // }

    if (!isLoading && !movies.length) {
        return <h1 className={style.notFound}>Not found</h1>;
    }

    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            loader={<Spinner />}
            next={() => setPage(prevPage => prevPage + 1)}
        >
            <ul className={style.content}>
                {movies.map((movie) => (
                    <MoviesCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    );
}
