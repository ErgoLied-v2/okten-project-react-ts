import {axiosInstance} from "./config.api.service";
import {urls} from "../constants/urls";
import {IGuestSession} from "../models/IGuestSession";

export const authService = {
    guestAuth: async (): Promise<IGuestSession> => {
        const response = await axiosInstance.get<IGuestSession>(urls.auth.guest);
        return response.data;
    }
}