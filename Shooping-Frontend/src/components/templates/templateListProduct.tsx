import React, { useState } from "react";
import { useEffect } from "react";
import type { Product } from "../../models/Product";
import { getAllProducts } from "../../services/productServices"
import CardProduct from "../organisms/cardProduct";
import HeadingTwo from "../atoms/headingTwo";

const TemplateListProduct: React.FC = () => {

    const [list, setList ]= useState<Product[]>();

    useEffect(() => {
        const fetchProducts = async() => {
            const data = await getAllProducts();
            setList(data.data);
        };
        fetchProducts();
    });

    return(
        <>
            <HeadingTwo 
                label="List products"
                className=""
            />
            {list?.map((product) => (
                <CardProduct 
                    product={product}
                />
            ))}
        </>
    );
}

export default TemplateListProduct;