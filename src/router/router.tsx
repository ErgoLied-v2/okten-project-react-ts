import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";

const routes: RouteObject[] = [{
    path: '', element: <App/>, children: [
        {index: true, element: <div>all movies</div>},
        {path: '/:movieID', element: <div>one movie details page</div>},
        {path: '/genres', element: <div>genres list</div>},
        {path: '/genres/:genreID', element: <div>movies list by genre</div>}
        // '/?searchParams=??????'
        // '/ratedMovies'

    ]
}];

export const routerConfig = createBrowserRouter(routes);