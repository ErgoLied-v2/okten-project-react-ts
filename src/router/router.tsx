import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import MoviesPage from "../pages/MoviesPage/MoviesPage";

const routes: RouteObject[] = [{
    path: '', element: <App/>, children: [
        {index: true, element: <MoviesPage/>},
        {path: '/:movieID', element: <div>one movie details page</div>},
        {path: '/genres', element: <div>genres list</div>},
        {path: '/genres/:genreID', element: <div>movies list by genre</div>}
        // '/?searchParams=??????'
        // '/ratedMovies'

    ]
}];

export const routerConfig = createBrowserRouter(routes);