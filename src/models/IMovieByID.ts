export interface IMovieByID {
    budget: number;
    genres: { id: number }[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date:string;
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
    videos: {
        results: {
            key: string;
            site: string;
            type: string;
        }[]
    }
}