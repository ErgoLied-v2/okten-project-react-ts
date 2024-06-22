import {createSlice} from "@reduxjs/toolkit";

type themeModSliceType = {
    mod: 'light' | 'dark';
}

const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

const initialState: themeModSliceType = {
    mod: isLightMode ? 'light' : 'dark'
}

export const themeModSlice = createSlice({
    name: 'themeModSlice',
    initialState,
    reducers: {
        changeMod: (state) => {
            state.mod = state.mod === 'light' ? 'dark' : 'light';
        }
    }
});

export const {changeMod} = themeModSlice.actions;