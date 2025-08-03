import React, { useState } from "react";
import Button from "../atoms/button";
import InputLabeled from "../molecules/inputLabeled";
import type { UserCreateDTO } from "../../models/User";
import { createUser } from "../../services/userService";

type FormUserProps = {
    classNameBtn: string
}

const FormUser: React.FC<FormUserProps> = ({
    classNameBtn
}) => {

    const [data, setData] =  useState < UserCreateDTO > ({
        username: '',
        email: '', 
        password: '' 
    })

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;   

        setData((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    const saveUser = () => {
        let result = createUser(data);
    }

    const fields = [
        {
            label: "Username",
            placeholder: "Username",
            value: data.username,
            type: "text"
        }, {
            label: "Email",
            placeholder: "Email",
            value: data.email,
            type: "text"
        },  {
            label: "Password",
            placeholder: "Password",
            value: data.password,
            type: "text"
        }
    ];

    return (
        <>
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
                onClick={() => saveUser()}
            />
        </>
    );
}

export default FormUser;