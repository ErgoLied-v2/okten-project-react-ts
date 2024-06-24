import {FC, useEffect, useState} from "react";
import PosterPreviewComponent from "../PosterPreview/PosterPreviewComponent";
import GenreBadgeComponent from "../GenreBadge/GenreBadgeComponent";
import StarsRatingComponent from "../StarsRating/StarsRatingComponent";
import {IMovieByID} from "../../models/IMovieByID";

interface IProps {
    movie: IMovieByID;
}

const MovieInfoComponent: FC<IProps> = ({movie}) => {
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
          <div>
              <p>{movie.title}</p>
              {movie.genres.map(genre => <GenreBadgeComponent key={genre.id} genreID={genre.id}/>)}
              <hr/>
              <p>original_title: {movie.original_title}</p>
              <p>original_language: {movie.original_language}</p>
              <p>release_date: {movie.release_date}</p>
              <p>popularity: {movie.popularity}</p>
              <p>vote_average: {movie.vote_average}</p>
              <p>vote_count: {movie.vote_count}</p>
              <StarsRatingComponent initialValue={movie.vote_average} movieID={movie.id}/>

              <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>

              <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoKey}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>

              <h2>overview</h2>
              <p>{movie.overview}</p>
          </div>
      );
};

export default MovieInfoComponent;