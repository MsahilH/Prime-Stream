import { createSlice } from "@reduxjs/toolkit";

export const hSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration: (state,action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = hSlice.actions;

export default hSlice.reducer;