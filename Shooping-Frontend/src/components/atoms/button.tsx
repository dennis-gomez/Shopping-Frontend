import React from "react";

type ButtonProps = {
    label: string;
    color: string;
    className: string;
    disabled?: boolean;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ 
    label, 
    color, 
    disabled, 
    className,
    onClick 
}) => {
    return(
        <>
            <button
                color={color}
                disabled={disabled}
                className={className}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    );
};

export default Button;