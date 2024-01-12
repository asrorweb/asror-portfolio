import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alert: null,
    // alert: {
    //     title: "",
    //     color: "",
    // }
};

export const alertMassage = createSlice({
    name: "alertMassage",
    initialState,
    reducers: {
        alertMassageSuccses: (state, actions) => {
            state.alert = actions.payload;
            console.log(state.alert);
        },
        alertMassageError: (state, actions) => {
            state.alert = actions.payload;
            console.log(state.alert);
        },
        alertMessageEnd: (state) => {
            state.alert = null;
        },
    },
});

export const { alertMassageError, alertMassageSuccses, alertMessageEnd } =
    alertMassage.actions;

export default alertMassage.reducer;
