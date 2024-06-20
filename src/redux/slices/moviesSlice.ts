import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {moviesService} from "../../services/movies.api.service";
import {IMoviesPaginated} from "../../models/IMoviesPaginated";

type MoviesSliceType = {
    moviesPaginated: IMoviesPaginated;
    isLoaded: boolean;
    error: string | null;
}

const initialState: MoviesSliceType = {
    moviesPaginated: {
        page: 1,
        total_pages: 0,
        total_results: 0,
        results: []
    },
    isLoaded: false,
    error: null
}

const loadMovies = createAsyncThunk<IMoviesPaginated, void, { rejectValue: string }>(
    'MoviesSlice/loadMovies',
    async (_, thunkAPI) => {
        try {
            const movies = await moviesService.getAll();
            thunkAPI.dispatch(moviesActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(movies);

        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

export const moviesSlice = createSlice({
    name: 'MoviesSlice',
    initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadMovies.fulfilled,
                (state, action) => {
                    state.moviesPaginated = action.payload;
                }
            )
            .addCase(
                loadMovies.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload ?? 'unknown error';
                }
            )
            .addMatcher(
                isFulfilled(loadMovies),
                (state, action) => {
                    state.isLoaded = true;
                }
            )
            .addMatcher(
                isRejected(loadMovies),
                (state, action) => {
                    state.error = action.payload ?? 'unknown error';
                }
            )
});


export const moviesActions = {...moviesSlice.actions, loadMovies}