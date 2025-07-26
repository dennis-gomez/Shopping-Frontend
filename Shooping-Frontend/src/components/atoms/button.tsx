import React from "react";

type ButtonProps = {
    label: string;
    color: string;
    disabled?: boolean;
    onClick: () => void;
};

const LabeledButton: React.FC<ButtonProps> = ({ label, color, disabled, onClick }) => {
    return(
        <>
            <button
                className="" 
                color={color}
                disabled={disabled}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    );
};

export default LabeledButton;