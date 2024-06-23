import {GUEST_SESSION_ID} from "../../constants/const";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services/auth.api.service";
import {AxiosError} from "axios";

type AuthSliceType = {
    guestSessionId: string | null;
    isLoaded: boolean;
    error: string | null;
}

const initialState: AuthSliceType = {
    guestSessionId: localStorage.getItem(GUEST_SESSION_ID) || null,
    isLoaded: !!localStorage.getItem(GUEST_SESSION_ID),
    error: null,
}

const loadGuestSession = createAsyncThunk<string, void, { rejectValue: string }>(
    'authSlice/loadGuestSession',
    async (_, thunkAPI) => {
        try {
            const guestSession = await authService.guestAuth();
            localStorage.setItem(GUEST_SESSION_ID, guestSession.guest_session_id)
            return thunkAPI.fulfillWithValue(guestSession.guest_session_id);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(
                loadGuestSession.fulfilled,
                (state, action) => {
                    state.guestSessionId = action.payload;
                    state.isLoaded = true;
                }
            )
            .addCase(
                loadGuestSession.rejected,
                (state, action) => {
                    state.isLoaded = false;
                    state.error = action.payload || 'sorry, we can\'t authorize you right now';
                }
            )
});

export const authActions = {loadGuestSession};