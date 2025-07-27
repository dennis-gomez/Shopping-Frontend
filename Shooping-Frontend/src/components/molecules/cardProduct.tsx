import React from "react"
import Button from "../atoms/button";
import type { Product } from "../../models/Product";
import { deleteProduct } from "../../services/productServices";
import { useNavigate } from "react-router-dom";

type CardProductProps = {
    product: Product
}

const CardProduct: React.FC<CardProductProps> = ({
    product
}) => {

    const navigate = useNavigate();

    async function editProduct( id: number ) {
        navigate('/product/edit/' + id);
    }

    async function removeProduct( id: number ) {
        const data = await deleteProduct(id);
    }

    return (
        <>
            <div>
                <Button 
                    onClick={() => editProduct(product.id)}
                    label="Edit"
                    color="blue"
                    className=""
                />
                <Button 
                    onClick={() => removeProduct(product.id)}
                    label="Delete"
                    color="red"
                    className=""
                />
            </div>
        </>
    );
}

export default CardProduct;