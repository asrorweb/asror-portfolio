import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../helpers/localStorageFunc";

const initialState = {
    mute: getItem("mute") ? Boolean(getItem("mute")) : false,
};

export const muteSound = createSlice({
    name: "muteSound",
    initialState,
    reducers: {
        muteSoundOnFunc: (state) => {
            state.mute = true;
            setItem("mute", true);
        },
        muteSoundOffFunc: (state) => {
            state.mute = false;
            setItem("mute", "");
        },
    },
});

export const { muteSoundOffFunc, muteSoundOnFunc } = muteSound.actions;

export default muteSound.reducer;
