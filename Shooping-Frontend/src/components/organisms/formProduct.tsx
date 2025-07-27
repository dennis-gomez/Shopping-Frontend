import React, { useState } from "react";
import type { Product } from "../../models/Product";
import InputLabeled from "../molecules/InputLabeled";
import Button from "../atoms/button";

type FormProductProps = {
    product: Product;
}

const FormProduct: React.FC<FormProductProps> = ({
    product
}) => {

    const [data, setData] = useState<Product>(product); 

    const fields = [
        {
            label: "name",
            placeholder: "Name",
            value: product.name,
            type: "number"
        }, {
            label: "name",
            placeholder: "Name",
            value: product.name,
            type: "text"
        }
    ];

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;   

        setData((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    const saveProduct = (data: Product) => {
        
    }

    return (
        <>
            {fields.map((field) => {
                <InputLabeled
                    labelText={field.label}
                    labelColor="black"
                    labelClassName=""
                    inputType= {field.value}
                    inputPlaceHolder={field.placeholder}
                    inputClassName=""
                    inputValue={field.value}
                    inputOnChange={onChangeFields}
                />
            })}

            <Button 
                label=""
                color=""
                className=""
                onClick={() => saveProduct(data)}
            />
        </>
    );
}

export default FormProduct;