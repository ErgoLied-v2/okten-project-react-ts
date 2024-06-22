import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {moviesSlice} from "./slices/moviesSlice";
import {genresSlice} from "./slices/genresSlice";
import {themeModSlice} from "./slices/themeModSlice";

export const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        genresSlice: genresSlice.reducer,
        themeModSlice: themeModSlice.reducer
    }
});

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
