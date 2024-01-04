import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../helpers/localStorageFunc";

const initialState = {
    dark: getItem("dark") ? Boolean(getItem("dark")) : false,
};

export const darkLightMode = createSlice({
    name: "darklightmode",
    initialState,
    reducers: {
        darkModefunc: (state) => {
            state.dark = true;
            setItem("dark", true);
            document.documentElement.classList = "dark";
        },
        lightModefunc: (state) => {
            state.dark = false;
            setItem("dark", "");
            document.documentElement.classList = "";
        },
    },
});

export const { darkModefunc, lightModefunc } = darkLightMode.actions;

export default darkLightMode.reducer;
