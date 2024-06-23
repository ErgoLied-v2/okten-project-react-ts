import {axiosInstance} from "./config.api.service";
import {urls} from "../constants/urls";
import {IMoviesPaginated} from "../models/IMoviesPaginated";
import {IRatingResponse} from "../models/IRatingResponse";

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
    },

    addRating: async (movieID: string, guest_session_id: string, rate: number): Promise<IRatingResponse> => {
        const response = await axiosInstance.post<IRatingResponse>(
            urls.movie.rating(movieID),
            {value: rate},
            {params: {guest_session_id}}
        );
        return response.data;
    },

    deleteRating: async (movieID: string, guest_session_id: string): Promise<IRatingResponse> => {
        const response = await axiosInstance.delete<IRatingResponse>(
            urls.movie.rating(movieID),
            {params: {guest_session_id}}
        );
        return response.data;
    },
}
