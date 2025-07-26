import React from "react";

type HeadingProps = {
    label: string;
    className: string;
}

const HeadingOne: React.FC<HeadingProps> = ({ label, className }) => {
    return (
        <>
            <h1 
                className={className}
            >
                {label}
            </h1>
        </>
    );
}

export default HeadingOne;