import axios from "axios";
import type { Product, ProductCreateDTO } from "../models/Product";
import { authHeathers } from "./authService";
import { handleAxiosError } from "./errorsHandler";
import type { ApiResponse } from "../models/ApiResponse";

const apiProduct = "https://localhost:7176/api/Products/";

/*
* endpoint create a product
* POST: /api/Products
*/
export async function createProduct ( product: ProductCreateDTO ): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.post(apiProduct, product, {
            headers: authHeathers()
        });
        return {
            data: result.data, 
            status: result.status, 
            success: true
        }
    } catch (error) {
        return handleAxiosError(error);
    }
}

/*
* endpoint update a product
* PUT: /api/Products/id
*/
export async function updateProduct ( product: Product ): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.put(apiProduct +`/${product.id}`, product, {
           headers: authHeathers()
        });

        return {
            data: result.data,
            success: true, 
            status: result.status
        }
    } catch (error) {
        return handleAxiosError(error);
    }
}

/*
* endpoint delete a single product
* DELETE: /api/Products/id
*/
export async function deleteProduct(id: number): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.delete(apiProduct + `/${id}`, {
            headers: authHeathers()
        });
        return {
            data: result.data, 
            status: result.status,
            success: true
        };
    } catch (error) {
        return handleAxiosError(error);
    }    
}

/*
* endpoint get a list of products
* GET: /api/Products
*/
export async function getAllProducts(): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.get(apiProduct, {
            headers: authHeathers()
        });
        return { 
            data: result.data, 
            success: true,
            status: result.status
        }
    } catch (error) {
        return handleAxiosError(error);
    }
}

/*
* endpoint get a single product
* GET: /api/Products/id
*/
export async function getProduct(id: number): Promise<ApiResponse<Product>> {
    try {
        const result = await axios.get(apiProduct + `/${id}`, {
            headers: authHeathers()
        });
        return {
            data: result.data, 
            status: result.status,
            success: true
        }
    } catch (error) {
        return handleAxiosError(error);
    }
}