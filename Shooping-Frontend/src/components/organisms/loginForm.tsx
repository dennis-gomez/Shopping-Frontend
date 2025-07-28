import type React from "react";
import InputLabeled from "../molecules/inputLabeled";
import { useState } from "react";
import type { Auth } from "../../models/Auth";
import Button from "../atoms/button";
import { login } from "../../services/authService"

const LoginForm: React.FC = () => {

    const [credentials, setCredentials] = useState<Auth>({
        email: '', 
        password: ''
    });

    const onChangeFields = ( event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;

        setCredentials ( (prev) => ({
            ...prev, 
            [name]: type === 'number' ? Number(value) : value
        }));
    }

    async function logIn () {
        const result = await login(credentials);
    }

    return(
        <>
            <div
                className=""
                color=""
            >
                <InputLabeled
                    labelText=""
                    labelColor=""
                    labelClassName=""
                    inputType="text"
                    inputPlaceHolder=""
                    inputClassName=""
                    inputValue={credentials.email}
                    inputOnChange={onChangeFields}
                />

                <InputLabeled
                    labelText=""
                    labelColor=""
                    labelClassName=""
                    inputType="password"
                    inputPlaceHolder=""
                    inputClassName=""
                    inputValue={credentials.password}
                    inputOnChange={onChangeFields}
                />

                <Button 
                    label="Log In"
                    color="blue"
                    className=""
                    onClick={() => logIn()}
                />
            </div>
        </>
    );
}

export default LoginForm;