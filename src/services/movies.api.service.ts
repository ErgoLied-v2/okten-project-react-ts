import {axiosInstance} from "./config.api.service";
import {urls} from "../constants/urls";
import {IMoviesPaginated} from "../models/IMoviesPaginated";

export const moviesService = {
    getAll: async (page: string):Promise<IMoviesPaginated> => {
        const response = await axiosInstance.get<IMoviesPaginated>(
            urls.movies.base,
            {params: {page: page}});
        return response.data;
    },

    search: async (query: string): Promise<IMoviesPaginated> => {
        const response = await axiosInstance.get<IMoviesPaginated>(
            urls.movies.search,
            {params: {query: query}});
        return response.data;
    }
}
