import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import GenresListComponent from "../components/GenresList/GenresListComponent";

const routes: RouteObject[] = [{
    path: '', element: <App/>, children: [
        {index: true, element: <MoviesPage/>},
        {path: '/:movieID', element: <MoviePage/>}, //add load single movie on moviepage
        {path: '/genres', element: <GenresListComponent/>}, //add genre page and load genres there
        {path: '/genres/:genreID', element: <div>movies list by genre</div>}
        //   '/?searchParams=??????'
        // * '/ratedMovies'

    ]
}];

export const routerConfig = createBrowserRouter(routes);