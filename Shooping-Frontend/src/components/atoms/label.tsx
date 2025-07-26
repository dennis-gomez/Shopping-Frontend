import React from "react";

type LabelProps = {
    text: string;
    color: string;
    className: string;
};

const Label: React.FC<LabelProps> = ({ text, color, className }) => {
    return (
        <>
            <label 
                color={color}
                className={className}
            >
                {text}
            </label>
        </>
    );
}

export default Label;