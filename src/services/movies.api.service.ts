import {axiosInstance} from "./config.api.service";
import {urls} from "../constants/urls";
import {IMoviesPaginated} from "../models/IMoviesPaginated";

export const moviesService = {
    getAll: async (page: string): Promise<IMoviesPaginated> => {
        const response = await axiosInstance.get<IMoviesPaginated>(
            urls.movies.base,
            {params: {page: page}});
        return response.data;
    },

    search: async (query: string, page: string): Promise<IMoviesPaginated> => {
        const response = await axiosInstance.get<IMoviesPaginated>(
            urls.movies.search,
            {params: {query: query, page: page}});
        return response.data;
    },

    searchByGenre: async (genreID: string, page: string): Promise<IMoviesPaginated> => {
        const response = await axiosInstance.get<IMoviesPaginated>(
            urls.movies.base,
            {params: {with_genres: genreID, page: page}}
        );
        return response.data;
    }
}
