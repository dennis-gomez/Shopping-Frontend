import React from "react"
import Button from "../atoms/button";
import type { Product } from "../../models/Product";
import { deleteProduct } from "../../services/productServices";
import { useNavigate } from "react-router-dom";
import HeadingTwo from "../atoms/headingTwo";
import Paragraph from "../atoms/paragraph";
import ParagraphHeaded from "../molecules/paragraphHeaded";

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
                <HeadingTwo 
                    label={product.name}
                    className=""
                />

                <Paragraph 
                    paragraph={product.description}
                    className=""
                />

                <ParagraphHeaded 
                    label="Code"
                    paragraph={product.codeCABYS.toString()}
                />

                <ParagraphHeaded 
                    label="Category"
                    paragraph={product.category.toString()}
                />

                <ParagraphHeaded 
                    label="Quantity"
                    paragraph={product.quantity.toString()}
                />

                <ParagraphHeaded 
                    label="Price"
                    paragraph={product.price.toString()}
                />
                
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