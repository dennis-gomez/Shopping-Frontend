import type React from "react";
import InputLabeled from "../molecules/inputLabeled";
import { useState } from "react";
import type { Auth } from "../../models/Auth";
import Button from "../atoms/button";
import { login } from "../../services/authService"
import HeadingOne from "../atoms/headingOne";

type LoginFormProps = {
    classNameBtn: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
    classNameBtn
}) => {

    const [credentials, setCredentials] = useState<Auth>({
        email: "", 
        password: "",
    });

    const onChangeFields = ( event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        console.log(name)
        console.log(value)
        
        setCredentials ((prev) => ({
            ...prev, 
            [name]: value
        }));
    }

    async function logIn () {
        const result = await login(credentials);
    }

    return(
        <>
            <div
                className="card-form"
            >
                <HeadingOne 
                    className="" 
                    label="Sign In"
                />
                <InputLabeled
                    labelText="Email"
                    inputType="text"
                    inputName="email"
                    inputPlaceHolder="Email"
                    inputValue={credentials.email}
                    inputOnChange={(e)=>onChangeFields(e)}
                />
                <InputLabeled
                    labelText="Password"
                    inputType="password"
                    inputName="password"
                    inputPlaceHolder="Password"
                    inputValue={credentials.password}
                    inputOnChange={onChangeFields}
                />
                <Button 
                    label="Create account"
                    color="blue"
                    className={classNameBtn}
                    onClick={logIn}
                />
                <Button 
                    label="Login"
                    color="blue"
                    className={classNameBtn}
                    onClick={logIn}
                />
            </div>
        </>
    );
}

export default LoginForm;