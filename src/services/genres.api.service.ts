import {IAllGenres} from "../models/IAllGenres";
import {axiosInstance} from "./config.api.service";
import {urls} from "../constants/urls";
import {IGenre} from "../models/IGenre";

export const genresService = {
    getAll: async (): Promise<IGenre[]> => {
        const response = await axiosInstance.get<IAllGenres>(urls.genres.base);
        return response.data.genres;
    }
}