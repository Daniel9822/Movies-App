import styles from './Details.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApi } from '../utils/httpClient';
import Spinner from '../components/Spinner';
import placeholder from '../placeholder.png'

export function Detail(){
    const {movieId} = useParams()
    const [movie, setMovies] = useState(null)
    const [isLoading, setIsLoading] = useState()
    
    useEffect(()=>{
        setIsLoading(true)
        getApi(`/movie/${movieId}`).then(data =>{
            setMovies(data)
            setIsLoading(false)
        })
    }, [movieId])

    if(isLoading){
        return <Spinner/>
    }
    
    if(!movie) return null
    
    const imgUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholder;
    return (
        <div className={styles.detailsContainer}>
            <img className={styles.col} src={imgUrl} alt="img" />
            <div className={styles.col}>
                <p className={styles.title}><strong>Title:</strong> {movie.title}</p>
                <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        
        </div>
    )
}