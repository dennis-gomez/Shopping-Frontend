import axios from "axios";
import type { Product, ProductCreateDTO } from "../models/Product";

const apiProduct = "https://localhost:7176/api/Product/";

/*
* endpoint create a product
* POST: /api/Products
*/
export async function createProduct ( product: ProductCreateDTO ) {
    try {
        const result = await axios.post(apiProduct, product, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return {
            data: result.data, 
            status: result.status, 
            success: true
        }
    } catch (error) {
        let message = "Unknown Error."
        let status = 500;
        if(axios.isAxiosError(error)){
            message = error.response?.data
            status = error.response?.status || 500
        }
        return {
            message: message, 
            status: status, 
            success: false
        }
    }
}

/*
* endpoint update a product
* PUT: /api/Products/id
*/
export async function updateProduct ( product: Product ) {
    try {
        const result = await axios.put(apiProduct +`/${product.id}`, product, {
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
* endpoint delete a single product
* DELETE: /api/Products/id
*/
export async function deleteProduct(id: number) {
    
    try {
        const result = await axios.delete(apiProduct + `/${id}`);
        return {
            data: result.data, 
            status: result.status,
            success: true
        };
    } catch (error) {
        let message = "Unknown Error."
        let status = 500; 
        if (axios.isAxiosError(error)) {
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
* endpoint get a list of products
* GET: /api/Products
*/
export async function getAllProducts() {
    try {
        const result = await axios.get(apiProduct)
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
* endpoint get a single product
* GET: /api/Products/id
*/
export async function getProduct(id: number) {
    try {
        const result = await axios.get(apiProduct + `/${id}`);
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