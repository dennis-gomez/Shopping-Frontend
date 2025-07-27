import React from "react";

type ButtonProps = {
    label: string;
    color: string;
    disabled?: boolean;
    className: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, color, disabled, className, onClick }) => {
    return(
        <>
            <button
                className={className} 
                color={color}
                disabled={disabled}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    );
};

export default Button;