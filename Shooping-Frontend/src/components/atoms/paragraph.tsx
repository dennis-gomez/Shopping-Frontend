import type React from "react";

type ParagraphProps = {
    paragraph: string;
    className: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
    paragraph, 
    className
}) => {
    return (
        <>
            <p 
                className={className}
            >
                {paragraph}
            </p>
        </>
    );
}

export default Paragraph;