import { configureStore } from "@reduxjs/toolkit";

import DarkModeReducer from "../reducer/dark-light-mode";
import ChangeLanguageReducer from "../reducer/language-change";
import MuteSoundChangeReducer from "../reducer/mute-sound";
import SendEmailReducer from "../reducer/email-send";
import AlertMassageReducer from "../reducer/alert-massage";

export const store = configureStore({
    reducer: {
        dark: DarkModeReducer,
        language: ChangeLanguageReducer,
        mute: MuteSoundChangeReducer,
        emailSend: SendEmailReducer,
        alert: AlertMassageReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});
