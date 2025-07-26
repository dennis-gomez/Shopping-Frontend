import axios from "axios";
import type { User, UserCreateDTO } from "../models/User";

const apiUser = "https://localhost:7176/api/Users/";

/*
* endpoint create a user
* POST: /api/Users
*/
export async function createUser( user: UserCreateDTO ){ 
    try {
        const result = await axios.post( apiUser, user, {
            headers: {
                'Content-Type': 'application/json'
             }
        });
        return {
            data: result.data, 
            success: true, 
            status: result.status
        }
    } catch (error) {
        let message = 'Unknown Error.';
        let status = 500;
        if(axios.isAxiosError(error)){
            message = error.response?.data
            status = error.response?.status || 500
        }
         return {
            message: message, 
            success: false, 
            status: status
        }
    }
}

/*
* endpoint get users
* GET: /api/Users
*/
export async function getAllUsers(){ 
    try {
        const result = await axios.get(apiUser)
        return { 
            data: result.data, 
            success: true
        }
    } catch (error) {
        let message = "Unknown Error."
         return {
            message: message, 
            status: 500, 
            success: false
        } 
    }
}

/*
* endpoint get user
* GET: /api/Users/id
*/
export async function getUser(id: number){ 
    try {
        const result = await axios.get(apiUser + `/${id}`);
        return {
            data: result.data, 
            status: result.status,
            success: true
        }
    } catch (error) {
        let message = "Unkown error."
        let status = 500;

        if(axios.isAxiosError(error)){
            message = error.response?.data;
            status =  error.response?.status || 500;
        }   
        return {
            message: message, 
            status: status, 
            success: false
        } 
    }
}

/*
* endpoint update user
* PUT: /api/Users/id
*/
export async function updateUser(user: User){ 
    try {
        const result = await axios.put(apiUser +`/disable/${user.id}`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return {
            data: result.data,
            success: true, 
            status: result.status
        }
    } catch (error) {
        let message  = "Unknown Error."
        let status = 500;

        if(axios.isAxiosError(error)){
            message = error.response?.data;
            status = error.response?.status || 500;
        }

        return {
            message: message, 
            status: status, 
            success: false
        }
    }
}

/*
* endpoint disable user
* PUT: /api/Users/disable/id
*/
export async function disableUser(id: number){ 
    try {
        const result = await axios.put(apiUser +`/disable/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return {
            data: result.data,
            success: true, 
            status: result.status
        }
    } catch (error) {
        let message  = "Unknown Error."
        let status = 500;

        if(axios.isAxiosError(error)){
            message = error.response?.data;
            status = error.response?.status || 500;
        }

        return {
            message: message, 
            status: status, 
            success: false
        }
    }
}

/*
* endpoint enable user
* PUT: /api/Users/enable/id
*/
export async function enableUser(id: number){ 
    try {
        const result = await axios.put(apiUser +`/enable/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return {
            data: result.data,
            success: true, 
            status: result.status
        }
    } catch (error) {
        let message  = "Unknown Error."
        let status = 500;

        if(axios.isAxiosError(error)){
            message = error.response?.data;
            status = error.response?.status || 500;
        }

        return {
            message: message, 
            status: status, 
            success: false
        }
    }
}