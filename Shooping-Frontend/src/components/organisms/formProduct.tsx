import React, { useState } from "react";
import type { Product, ProductCreateDTO } from "../../models/Product";
import Button from "../atoms/button";
import { createProduct, updateProduct } from "../../services/productServices";
import InputLabeled from "../molecules/inputLabeled";

type FormProductProps = {
    product?: Product | null;
}

const FormProduct: React.FC<FormProductProps> = ({
    product
}) => {

    const [data, setData] =  useState < Product > ({
        id: product?.id || 0,
        category: product?.category || "",
        codeCABYS: product?.codeCABYS || "",
        description: product?.description || "",
        name: product?.name || "",
        price: product?.price || 0,
        quantity: product?.quantity || 0, 
    })

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;   

        setData((prev) => ({
            ...prev, 
            [name]: type === "number" ? Number(value) : value
        }));
    }

    const saveProduct = (data: Product ) => {
        let result; 

        if(data.id === 0){
            const temp: ProductCreateDTO = {
                category: data.category,
                codeCABYS: data.codeCABYS,
                description: data.description,
                name: data.name,
                price: data.price,
                quantity: data.quantity, 
            };

            result = createProduct(temp);
        }else{
            result = updateProduct(data); 
        }   


    }

    const fields = [
        {
            label: "Name",
            placeholder: "Name",
            value: data.name,
            type: "text"
        }, {
            label: "Description",
            placeholder: "Description",
            value: data.description,
            type: "text"
        },  {
            label: "Category",
            placeholder: "Category",
            value: data.category,
            type: "text"
        }, {
            label: "Cabys:",
            placeholder: "Cabys code",
            value: data.codeCABYS,
            type: "text"
        },  {
            label: "Price:",
            placeholder: "Price",
            value: data.price,
            type: "number"
        }, {
            label: "Quantity:",
            placeholder: "Quantity",
            value: data.quantity,
            type: "number"
        }
    ];

    return (
        <>
            {fields.map((field) => (
                <InputLabeled
                    labelText={field.label}
                    labelColor="black"
                    labelClassName=""
                    inputType= {field.type}
                    inputPlaceHolder={field.placeholder}
                    inputClassName=""
                    inputValue={field.value}
                    inputOnChange={onChangeFields}
                />
            ))}

            <Button 
                label="Guardar"
                color="blue"
                className=""
                onClick={() => saveProduct(data)}
            />
        </>
    );
}

export default FormProduct;