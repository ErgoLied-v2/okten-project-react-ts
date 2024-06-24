import {FC, useEffect, useState} from "react";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import GenreBadgeComponent from "../GenreBadge/GenreBadgeComponent";
import StarsRatingComponent from "../StarsRating/StarsRatingComponent";
import {IMovieByID} from "../../models/IMovieByID";
import {useAppSelector} from "../../redux/store";
import './MovieInfoComponent.css'

interface IProps {
    movie: IMovieByID;
}

const MovieInfoComponent: FC<IProps> = ({movie}) => {
    const {mod} = useAppSelector(state => state.themeModSlice);
    const [videoKey, setVideoKey] = useState<string | null>(null);

    useEffect(() => {
        const video = movie.videos.results.find(video => (video.site === 'YouTube' && video.type === 'Trailer'));
        if (video) {
            setVideoKey(video.key);
        } else {
            setVideoKey(null);
        }
    }, [movie]);

    return (
        <div className={`container m-100 custom-fg-${mod}`}>
            <div className={'flex'}>
                <div className={`cyber-tile custom-bg-accent-${mod}`}>
                    <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
                </div>
                <div className={`movie-container`}>
                    <h1 className={`cyber-h custom-ac-${mod}`}>{movie.title}</h1>
                    <StarsRatingComponent initialValue={movie.vote_average} movieID={movie.id}/>
                    <hr/>
                    <p><strong>original title:</strong> {movie.original_title}</p>
                    <p><strong>original language:</strong> {movie.original_language}</p>
                    <p><strong>release date:</strong> {movie.release_date}</p>
                    <p><strong>popularity:</strong> {movie.popularity}</p>
                    <p><strong>vote average:</strong> {movie.vote_average}</p>
                    <p><strong>vote count:</strong> {movie.vote_count}</p>
                    <div className={'badge-box'}>
                        {movie.genres.map(genre => <GenreBadgeComponent key={genre.id} genreID={genre.id}/>)}
                    </div>
                </div>
            </div>

            <h2 className={'cyber-h'}>OVERVIEW</h2>
            <p>{movie.overview}</p>

            <div className={'video'}>
            <iframe
                src={`https://www.youtube.com/embed/${videoKey}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
        </div>
    );
};

export default MovieInfoComponent;