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

    // search: async (): Promise<> => {
    //     const response = await axiosInstance.get<>(urls.movies.search(???))
    //     return response.data;
    // }
}
