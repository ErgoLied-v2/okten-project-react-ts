import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {moviesService} from "../../services/movies.api.service";
import {IMoviesPaginated} from "../../models/IMoviesPaginated";
import {IRatingResponse} from "../../models/IRatingResponse";

type MoviesSliceType = {
    moviesPaginated: IMoviesPaginated;
    searchedMoviesPaginated: IMoviesPaginated;
    searchedMoviesByGenre: IMoviesPaginated;
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
    searchedMoviesPaginated: {
        page: 1,
        total_pages: 0,
        total_results: 0,
        results: []
    },
    searchedMoviesByGenre: {
        page: 1,
        total_pages: 0,
        total_results: 0,
        results: []
    },
    isLoaded: false,
    error: null
}

const loadMovies = createAsyncThunk<IMoviesPaginated, string, { rejectValue: string }>(
    'MoviesSlice/loadMovies',
    async (page: string, thunkAPI) => {
        try {
            const movies = await moviesService.getAll(page || '1');
            thunkAPI.dispatch(moviesActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(movies);

        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

const loadSearchedMovies = createAsyncThunk<IMoviesPaginated, { query: string, page: string }, { rejectValue: string }>(
    'MoviesSlice/loadSearchedMovies',
    async ({query, page}, thunkAPI) => {
        try {
            const searchedMovies = await moviesService.search(query, page || '1');
            thunkAPI.dispatch(moviesActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(searchedMovies);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

const loadSearchMoviesByGenre = createAsyncThunk<IMoviesPaginated, { genreID: string, page: string }, {
    rejectValue: string
}>(
    'MoviesSlice/loadSearchMoviesByGenre',
    async ({genreID, page}, thunkAPI) => {
        try {
            const searchedMovies = await moviesService.searchByGenre(genreID, page || '1');
            thunkAPI.dispatch(moviesActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(searchedMovies);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

const addRating = createAsyncThunk<IRatingResponse, { movieID: string; guestSessionId: string; rate: number }, {
    rejectValue: string
}>(
    'movies/addRating',
    async ({movieID, guestSessionId, rate}, thunkAPI) => {
        try {
            return await moviesService.addRating(movieID, guestSessionId, rate);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

const deleteRating = createAsyncThunk<IRatingResponse, { movieID: string; guestSessionId: string }, {
    rejectValue: string
}>(
    'movies/addRating',
    async ({movieID, guestSessionId}, thunkAPI) => {
        try {
            return await moviesService.deleteRating(movieID, guestSessionId);
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
        },
        clearSearchedMovies: (state) => {
            state.searchedMoviesPaginated = initialState.searchedMoviesPaginated;
        },
        clearSearchMoviesByGenre: (state) => {
            state.searchedMoviesByGenre = initialState.searchedMoviesByGenre;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadMovies.fulfilled,
                (state, action) => {
                    state.moviesPaginated = {...state.moviesPaginated, ...action.payload};
                }
            )
            .addCase(
                loadMovies.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload ?? 'unknown error';
                }
            )
            .addCase(
                loadSearchedMovies.fulfilled,
                (state, action) => {
                    state.searchedMoviesPaginated = action.payload;
                }
            )
            .addCase(
                loadSearchedMovies.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload ?? 'unknown error';
                }
            )
            .addCase(
                loadSearchMoviesByGenre.fulfilled,
                (state, action) => {
                    state.searchedMoviesByGenre = action.payload;
                }
            )
            .addCase(
                loadSearchMoviesByGenre.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload ?? 'unknown error';
                })
            .addMatcher(
                isFulfilled(loadMovies, loadSearchedMovies),
                (state, action) => {
                    state.isLoaded = true;
                }
            )
            .addMatcher(
                isFulfilled(addRating, deleteRating),
                (state, action) => {
                }
            )
            .addMatcher(
                isRejected(loadMovies, loadSearchedMovies),
                (state, action) => {
                    state.error = action.payload ?? 'unknown error';
                }
            )
});

export const moviesActions = {
    ...moviesSlice.actions,
    loadMovies,
    loadSearchedMovies,
    loadSearchMoviesByGenre,
    addRating, deleteRating
}