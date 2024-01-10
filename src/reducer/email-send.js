import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
};

export const sendEmail = createSlice({
    name: "sendEmail",
    initialState,
    reducers: {
        sendEmailStart: (state) => {
            state.loading = true;
        },
        sendEmailSuccses: (state) => {
            state.loading = false;
        },
        sendEmailError: (state) => {
            state.loading = false;
        },
    },
});

export const { sendEmailError, sendEmailStart, sendEmailSuccses } =
    sendEmail.actions;

export default sendEmail.reducer;
