import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../helpers/localStorageFunc";

const initialState = {
    language: getItem("lang") ? Boolean(getItem("lang")) : false,
};

export const languageChange = createSlice({
    name: "languageChange",
    initialState,
    reducers: {
        changeLanguageUz: (state) => {
            state.language = true;
            setItem("lang", true);
        },
        changeLanguageEng: (state) => {
            state.language = false;
            setItem("lang", "");
        },
    },
});

export const { changeLanguageUz, changeLanguageEng } = languageChange.actions;

export default languageChange.reducer;
