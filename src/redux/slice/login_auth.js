import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const initialState = {
    login: false,
    loginLoading: true,
    loginErrorMessage: null,

    verification: false,
    verificationLoading: true,
    verificationErrorMessage: null
};

// A slice for recipes with our 3 reducers
const adminLoginSlice = createSlice({
    name: "adminLogin",
    initialState,
    reducers: {

        getLoginData: (state) => {
            state.login = false;
            state.loginLoading = true;
            state.loginErrorMessage = null;
        },
        getLoginDataSuccess: (state, { payload }) => {
            state.login = payload;
            state.loginLoading = false;
            state.loginErrorMessage = null;
        },
        getLoginDataFailure: (state, { paylaod }) => {
            state.login = false;
            state.loginErrorMessage = paylaod;
            state.loginLoading = false;
        },


        getVerificationData: (state) => {
            state.verification = false;
            state.verificationLoading = true;
            state.verificationErrorMessage = null;
        },
        getVerificationDataSuccess: (state, { payload }) => {
            state.verification = payload;
            state.verificationLoading = false;
            state.verificationErrorMessage = null;
        },
        getVerificationDataFailure: (state, { paylaod }) => {
            state.verification = false;
            state.verificationErrorMessage = paylaod;
            state.verificationLoading = false;
        },


    },
});

// Three actions generated from the slice
const {

    getLoginData,
    getLoginDataSuccess,
    getLoginDataFailure,

    getVerificationData,
    getVerificationDataSuccess,
    getVerificationDataFailure
} = adminLoginSlice.actions;

// A selector

export const adminLoginDataSelector = (state) =>
    state.login_auth;

// The reducer
export default adminLoginSlice.reducer;

// Asynchronous thunk action


export function adminLogin(paylaod) {

    return async (dispatch) => {
        dispatch(getLoginData());
        let url = `https://2d3e-103-182-160-186.ngrok-free.app/admin/send-code`
        try {
            let result = await axios.post(url, {
                email: paylaod
            })
            result = result.data;
            dispatch(getLoginDataSuccess(true))
            toast.success(result.message);
        } catch (error) {
            const message = error.message || "Something went wrong";
            toast.error("Admin Not Found");
            dispatch(getLoginDataFailure(message));
        }
    };
}


export function adminVerificationCode(paylaod) {
    console.log(paylaod)
    return async (dispatch) => {
        // dispatch(getLoginData());

        let url = `https://2d3e-103-182-160-186.ngrok-free.app/admin/verify-code`
        try {
            let result = await axios.post(url, paylaod)
            result = result.data;
            dispatch(getVerificationDataSuccess(true))
            toast.success(result.message);
        } catch (error) {
            const message = error.message || "Something went wrong";
            console.log(error)
            dispatch(getVerificationDataFailure(message));
        }
    };
}



