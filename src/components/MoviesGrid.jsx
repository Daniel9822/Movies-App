import { useEffect, useState, React } from "react";
import { MoviesCard } from "./MoviesCard";
import style from "./MoviesGrid.module.css";
import { getApi } from "../utils/httpClient";
import Spinner from "./Spinner";
import { useQuery } from "../hoocks/UseQuery";

// function useQuery() {
//     const { search } = useLocation();
//     return React.useMemo(() => new URLSearchParams(search), [search]);
//   }

export function MoviesGrid() {
    let query = useQuery();
    const search = query.get("search");

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? `/search/movie?query=${search}`
            : "/discover/movie";
        getApi(searchUrl).then((data) => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, [search]);

    if (isLoading) {
        return <Spinner />;
    }

    if (!movies.length) {
        return <h1 className= {style.notFound}>Not found</h1>;
    }
    return (
        <ul className={style.content}>
            {movies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}
