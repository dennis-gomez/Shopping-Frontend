import type React from "react";

type InputProps = {
    value: string | number;
    type: string;
    placeholder?: string;
    className: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, type, placeholder, className, onChange }) => {
    return(
        <>
            <input 
                type={type} 
                placeholder={placeholder} 
                className={className} 
                value={value}
                onChange={onChange}
            />
        </>
    );
} 

export default Input;