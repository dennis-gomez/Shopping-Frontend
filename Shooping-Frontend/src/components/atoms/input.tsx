import type React from "react";

type InputProps = {
    value: string | number;
    type: string;
    name: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, type, placeholder, onChange, name }) => {
    return(
        <>
            <input
                type= {type}
                name={name}
                placeholder={placeholder} 
                className=""
                value={value}
                onChange={onChange}
            />
        </>
    );
} 

export default Input;