import type React from "react";
import InputLabeled from "../molecules/inputLabeled";
import { useState } from "react";
import type { Auth } from "../../models/Auth";
import Button from "../atoms/button";
import { login } from "../../services/authService"
import HeadingOne from "../atoms/headingOne";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type LoginFormProps = {
    classNameBtn: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
    classNameBtn
}) => {
    const navigate = useNavigate();

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
        if(result.token!==""){
            localStorage.setItem("token", result.token);
            redirectMenuPage();
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: result.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    function redirect () {
        navigate('user/add');
    }

    function redirectMenuPage () {
        navigate('product/')
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
                    onClick={redirect}
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