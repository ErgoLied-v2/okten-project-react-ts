import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import GenresListComponent from "../components/GenresList/GenresListComponent";
import MoviesByGenrePage from "../pages/MoviesByGenrePage/MoviesByGenrePage";
import MovieByGenrePage from "../pages/MovieByGenrePage/MovieByGenrePage";
import RatedMoviesPage from "../pages/RatedMoviesPage/RatedMoviesPage";
import GenresPage from "../pages/GenresPage/GenresPage";

const routes: RouteObject[] = [{
    path: '', element: <App/>, children: [
        {index: true, element: <MoviesPage/>},
        {path: '/:movieID', element: <MoviePage/>},
        {path: '/genres', element: <GenresPage/>},
        {path: '/genres/:genreID', element: <MoviesByGenrePage/>},
        {path: '/genres/:genreID/:movieID', element: <MovieByGenrePage/>},
        {path: '/userRatedMovies', element:<RatedMoviesPage/>}
    ]
}];

export const routerConfig = createBrowserRouter(routes);