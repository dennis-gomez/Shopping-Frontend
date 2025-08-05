import React, { useState } from "react";
import type { Product, ProductCreateDTO } from "../../models/Product";
import Button from "../atoms/button";
import { createProduct, updateProduct } from "../../services/productServices";
import InputLabeled from "../molecules/inputLabeled";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type FormProductProps = {
    product?: Product | null;
    classNameBtn: string;
}

const FormProduct: React.FC<FormProductProps> = ({
    product, 
    classNameBtn, 
}) => {

    const nav = useNavigate();

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

    async function saveProduct (data: Product ){
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
            result = await createProduct(temp);
        }else{
            result = await updateProduct(data); 
        }   

        if(!result.success){
            Swal.fire({
                position: "center",
                icon: "error",
                title: result.status == 401 ? 'Login timeout': result.message,
                showConfirmButton: false,
                timer: 1500
            });
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
            <div
                className="card-form"
            >
                {fields.map((field) => (
                <InputLabeled
                    labelText={field.label}
                    labelColor="black"
                    inputName=""
                    inputType= {field.type}
                    inputPlaceHolder={field.placeholder}
                    inputValue={field.value}
                    inputOnChange={onChangeFields}
                />
                ))}

                <Button 
                    label="Guardar"
                    color="blue"
                    className={classNameBtn}
                    onClick={() => saveProduct(data)}
                />
            </div>  
        </>
    );
}

export default FormProduct;