import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {moviesService} from "../../services/movies.api.service";
import {IMoviesPaginated} from "../../models/IMoviesPaginated";
import {IRatingResponse} from "../../models/IRatingResponse";
import {IAccountStates} from "../../models/IAccountStates";
import {IMovieByID} from "../../models/IMovieByID";

type MoviesSliceType = {
    moviesPaginated: IMoviesPaginated;
    ratedMovies: IMoviesPaginated;
    searchedMoviesPaginated: IMoviesPaginated;
    searchedMoviesByGenre: IMoviesPaginated;
    selectedMovie: IMovieByID | null;
    isLoaded: boolean;
    accountStates: IAccountStates;
    error: string | null;
}

const initialState: MoviesSliceType = {
    moviesPaginated: {
        page: 1,
        total_pages: 0,
        total_results: 0,
        results: []
    },
    ratedMovies: {
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
    selectedMovie: null,
    isLoaded: false,
    accountStates: {
        id: null,
        favorite: false,
        rated: false,
        watchlist: false
    },

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

const loadMovieByID = createAsyncThunk<IMovieByID, string, { rejectValue: string }>(
    'MoviesSlice/loadMovieByID',
    async (movieID: string, thunkAPI) => {
        try {
            const movie = await moviesService.getByID(movieID);
            return thunkAPI.fulfillWithValue(movie);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

const loadRatedMovies = createAsyncThunk<IMoviesPaginated, void, { rejectValue: string }>(
    'MoviesSlice/loadRatedMovies',
    async (_, thunkAPI) => {
        try {
            const movies = await moviesService.getRatedList();
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

const loadAccountStates = createAsyncThunk(
    'MoviesSlice/loadAccountStates',
    async (movieID: string, thunkAPI) => {
        try {
            const accountStates = await moviesService.getAccountStates(movieID);
            return thunkAPI.fulfillWithValue(accountStates);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

const addRating = createAsyncThunk<IRatingResponse, { movieID: string; rate: number }, {
    rejectValue: string
}>(
    'MoviesSlice/addRating',
    async ({movieID, rate}, thunkAPI) => {
        try {
            return await moviesService.addRating(movieID, rate);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(JSON.stringify(error.response?.data) || 'unknown error');
        }
    }
);

const deleteRating = createAsyncThunk<IRatingResponse, { movieID: string }, {
    rejectValue: string
}>(
    'MoviesSlice/addRating',
    async ({movieID}, thunkAPI) => {
        try {
            const response = await moviesService.deleteRating(movieID);
            thunkAPI.dispatch(loadRatedMovies());
            return response;
            // return await moviesService.deleteRating(movieID);
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
        }
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
            .addCase(
                loadMovieByID.fulfilled,
                (state, action) => {
                    state.selectedMovie = action.payload;
                }
            )
            .addCase(
                loadMovieByID.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload ?? 'unknown error';
                })
            .addCase(
                loadAccountStates.fulfilled,
                (state, action) => {
                    state.accountStates = action.payload;
                }
            )
            .addCase(
                loadRatedMovies.fulfilled,
                (state, action) => {
                    state.ratedMovies = action.payload;
                }
            )
            .addCase(
                loadRatedMovies.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.error = action.payload ?? 'unknown error';
                })
            .addMatcher(
                isFulfilled(loadMovies, loadSearchedMovies, loadSearchMoviesByGenre, loadMovieByID),
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
                isRejected(loadMovies, loadSearchedMovies, loadSearchMoviesByGenre, loadMovieByID, loadRatedMovies),
                (state, action) => {
                    state.error = action.payload ?? 'unknown error';
                    state.isLoaded = false;
                }
            )
});

export const moviesActions = {
    ...moviesSlice.actions,
    loadMovies,
    loadSearchedMovies,
    loadSearchMoviesByGenre,
    loadMovieByID,
    loadRatedMovies,
    loadAccountStates,
    addRating, deleteRating
}