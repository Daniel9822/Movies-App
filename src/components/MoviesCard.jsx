import { Link } from "react-router-dom";
import style from "./moviesCard.module.css";
import placeHolder from '../placeholder.png'

export function MoviesCard({ movie }) {
    const imgUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : placeHolder;

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
