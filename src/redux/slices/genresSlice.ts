import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGenre} from "../../models/IGenre";
import {genresService} from "../../services/genres.api.service";
import {AxiosError} from "axios";

type GenresSliceType = {
    genres: IGenre[];
    error: string | null;
}

const initialState: GenresSliceType = {
    genres: [],
    error: null
}

const loadGenres = createAsyncThunk<IGenre[], void, { rejectValue: string }>(
    'genresSlice/loadGenres',
    async (_, thunkAPI) => {
        try {
            const genres = await genresService.getAll();
            return thunkAPI.fulfillWithValue(genres);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(
                loadGenres.fulfilled,
                (state, action: PayloadAction<IGenre[]>) => {
                    state.genres = action.payload;
                }
            )
            .addCase(
                loadGenres.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload ?? 'Unknown error';
                }
            )
});

export const genresActions = {...genresSlice.actions, loadGenres}