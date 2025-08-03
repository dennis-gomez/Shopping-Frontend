import React from "react";

type LabelProps = {
    text: string;
    color?: string;
};

const Label: React.FC<LabelProps> = ({ 
    text, 
    color 
}) => {
    return (
        <>
            <label 
                color={color}
                className=""
            >
                {text}
            </label>
        </>
    );
}

export default Label;