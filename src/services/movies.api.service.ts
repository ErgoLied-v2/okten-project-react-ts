import {axiosInstance} from "./config.api.service";
import {urls} from "../constants/urls";
import {IMoviesPaginated} from "../models/IMoviesPaginated";
import {IRatingResponse} from "../models/IRatingResponse";
import {IAccountStates} from "../models/IAccountStates";
import {IMovieByID} from "../models/IMovieByID";

export const moviesService = {
    getAll: async (page: string): Promise<IMoviesPaginated> => {
        const response = await axiosInstance.get<IMoviesPaginated>(
            urls.movies.base,
            {params: {page: page}});
        return response.data;
    },

    getByID: async (movieID: string): Promise<IMovieByID> => {
        const response = await axiosInstance.get<IMovieByID>(
            urls.movie.details(movieID));
        return response.data;
    },

    getRatedList: async ():Promise<IMoviesPaginated>=>{
        const response = await axiosInstance.get<IMoviesPaginated>(
            urls.movies.ratedList
        );
        return response.data
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

    getAccountStates: async (movieID: string): Promise<IAccountStates> => {
        const response = await axiosInstance.get<IAccountStates>(
            urls.movie.states(movieID)
        );
        return response.data;
    },

    addRating: async (movieID: string, rate: number): Promise<IRatingResponse> => {
        const response = await axiosInstance.post<IRatingResponse>(
            urls.movie.rating(movieID),
            {value: rate}
        );
        return response.data;
    },

    deleteRating: async (movieID: string): Promise<IRatingResponse> => {
        const response = await axiosInstance.delete<IRatingResponse>(
            urls.movie.rating(movieID)
        );
        return response.data;
    },
}
