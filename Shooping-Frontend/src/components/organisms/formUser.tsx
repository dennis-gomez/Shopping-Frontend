import React, { useState } from "react";
import Button from "../atoms/button";
import InputLabeled from "../molecules/inputLabeled";
import type { ErrorUserDTO, UserCreateDTO } from "../../models/User";
import { createUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type FormUserProps = {
    classNameBtn: string
}

const FormUser: React.FC<FormUserProps> = ({
    classNameBtn
}) => {

    const navigate = useNavigate();

    const [data, setData] =  useState <UserCreateDTO> ({
        username: '',
        email: '', 
        password: '' 
    })

    const [error, setError] = useState <ErrorUserDTO> ({
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

    async function saveUser () {
        let result = await createUser(data);

        if(result.success){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User created",
                showConfirmButton: false,
                timer: 1500
            });
            redirect();
        }else{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Error",
                html: `${result.data.title}`,
                showConfirmButton: false,
                timer: 1500
            });
            
            setError({
                email: result.data.errors.Email?.[0], 
                password: result.data.errors.Password?.[0], 
                username: result.data.errors.Username?.[0]
            })
        }
    }

    function redirect () {
        navigate('/');
    }

    const fields = [
        {
            label: "Username",
            name: "username",
            placeholder: "Username",
            value: data.username,
            type: "text", 
            error: error.username
        }, {
            label: "Email",
            name: "email",
            placeholder: "Email",
            value: data.email,
            type: "text", 
            error: error.email
        },  {
            label: "Password",
            name: "password",
            placeholder: "Password",
            value: data.password,
            type: "password", 
            error: error.password
        }
    ];

    return (
        <>
            {fields.map((field) => (
            <>
                <InputLabeled
                    labelText={field.label}
                    labelColor="black"
                    inputName={field.name}
                    inputType= {field.type}
                    inputPlaceHolder={field.placeholder}
                    inputValue={field.value}
                    inputOnChange={onChangeFields}
                    errorMessage={field.error}
                />
            </>
            ))}
            <Button 
                label="Cancel"
                color="blue"
                className={classNameBtn}
                onClick={redirect}
            />
            <Button 
                label="Guardar"
                color="blue"
                className={classNameBtn}
                onClick={saveUser}
            />
        </>
    );
}

export default FormUser;