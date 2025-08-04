import axios from "axios";
import type { Auth } from "../models/Auth";

const apiAuth = 'https://localhost:7176/api/Auth/'

/*
* endpoint login user
* POST: /api/Auth
*/
export async function login (auth: Auth) {
    try {
        const result = await axios.post(apiAuth, auth, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return {
            message: result.data.message,
            token: result.data.token
        }
    } catch (error) {
        let message = '';
        let status;
        if (axios.isAxiosError(error)){
            message = error.response?.data.message;
            status = error.response?.status || 500;
        }
        return {
            message: message, 
            status: status
        }
    }
}