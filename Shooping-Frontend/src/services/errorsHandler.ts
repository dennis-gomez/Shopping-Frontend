import axios from "axios";
import type { ApiResponse } from "../models/ApiResponse";

export function handleAxiosError<T=unknown>(error: unknown): ApiResponse<T>{
    let message = "Unknown Error."
    let status = 500;

    if(axios.isAxiosError(error)){
        message = error.response?.data
        status = error.response?.status || 500
    }

    if(status==401){
        localStorage.removeItem('token');
    }

    return {
        success: false,
        message, 
        status,
    };
}