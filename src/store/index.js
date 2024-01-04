import { configureStore } from "@reduxjs/toolkit";

import DarkModeReducer from "../reducer/dark-light-mode";
import ChangeLanguageReducer from "../reducer/language-change";
import MuteSoundChangeReducer from "../reducer/mute-sound";

export const store = configureStore({
    reducer: {
        dark: DarkModeReducer,
        language: ChangeLanguageReducer,
        mute: MuteSoundChangeReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});
