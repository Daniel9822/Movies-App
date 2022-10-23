import { Link } from "react-router-dom";
import style from "./moviesCard.module.css";

export function MoviesCard({ movie }) {
    const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

    return (
        <li className={style.moviesCard}>
            <Link to={`/movie/${movie.id}`}>
                <img
                    width={230}
                    height={345}
                    className={style.imgCard}
                    src={imgUrl}
                    alt={movie.title}
                />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}
